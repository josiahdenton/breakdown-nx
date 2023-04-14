import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap, catchError, of } from 'rxjs';

import * as TasksActions from './tasks.actions';
import { TaskFileSystemApiService } from '../services/task-file-system-api.service';
import { selectAllGroups, selectTaskEntities } from './tasks.selectors';
import { Task, TaskGroup } from '@breakdown-nx/core/models';
// import * as TasksFeature from './tasks.reducer';

@Injectable()
export class TasksEffects {
    private actions$ = inject(Actions);
    private _store = inject(Store);
    private taskFileSystemAPI = inject(TaskFileSystemApiService);

    loadGroups$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TasksActions.loadTaskGroups),
            switchMap(() =>
                this.taskFileSystemAPI.loadTaskState().pipe(
                    switchMap(([groups, tasks, loaded]) => {
                        if (!loaded) {
                            return of(
                                TasksActions.loadTaskGroupsFailure({
                                    error: 'Failed to load state from file',
                                })
                            );
                        }
                        return of(
                            TasksActions.loadTaskGroupsSuccess({
                                groups,
                                tasks,
                            })
                        );
                    })
                )
            ),
            catchError((error) => {
                console.error('Error', error);
                return of(TasksActions.loadTaskGroupsFailure({ error }));
            })
        )
    );

    // BUG: why does I get so many changes in taskEntities on first load...
    // 3x for every task column
    moveTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TasksActions.moveTask),
            concatLatestFrom(() => [
                this._store.select(selectAllGroups),
                this._store.select(selectTaskEntities),
            ]),
            switchMap(([action, groups, tasks]) => {
                // 0. deep copy the groups and select the ones being updated
                // NOTE: structuredClone only works with serializable data, see MDN for more details
                // if you need something like a function inside the entity, use lodash with deepcopy
                // const clonedTasks = structuredClone(tasks) as Record<number, Task>;
                const clonedGroups = structuredClone(groups) as TaskGroup[];
                const previousGroup = clonedGroups.find(
                    (group) => group.id === action.previousGroupId
                );
                const nextGroup = clonedGroups.find(
                    (group) => group.id === action.nextGroupId
                );
                // 1. remove task from the group
                const taskId = previousGroup?.tasks.splice(
                    action.previousOrder,
                    1
                )[0];
                // 2. push task to new group and update group ID
                if (taskId) {
                    nextGroup?.tasks.splice(action.nextOrder, 0, taskId);
                    const task = structuredClone(tasks[taskId]);
                    task.groupId = action.nextGroupId;
                    // 3. return the updates...
                    return of(
                        TasksActions.moveTaskSuccess({
                            groups: clonedGroups,
                            task,
                        })
                    );
                }
                return of(
                    TasksActions.moveTaskFailure({ error: 'No task ID' })
                );
            })
        )
    );

    // TODO: figure out how I want to load groups and tasks....
    // perhaps they should go in the same init$ effect that loads both tasks and groups and
    // then puts them in their proper groups...
    // let's assume we have two services, one that loads the tasks and one that loads the groups...
    // let's write out "mock" services for these. In the future, this is where the
    // JSON for the task state will load from.
}
