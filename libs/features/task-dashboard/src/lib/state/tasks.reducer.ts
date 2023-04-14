import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import { Task, TaskGroup } from '@breakdown-nx/core/models';

export const TASKS_FEATURE_KEY = 'tasks';

export interface TasksState extends EntityState<TaskGroup> {
    selectedId?: string | number; // which Tasks record has been selected
    // maps ID to TaskGroup...
    // groupEntities: Record<number, TaskGroup>; // on task load, set the tasks to their respective groups
    // groupIds: number[];
    taskEntities: Record<number, Task>;
    loaded: boolean; // has the Tasks list been loaded
    error?: string | null; // last known error (if any)
}

export interface TasksPartialState {
    readonly [TASKS_FEATURE_KEY]: TasksState;
}

export const tasksAdapter: EntityAdapter<TaskGroup> =
    createEntityAdapter<TaskGroup>();

export const initialTasksState: TasksState = tasksAdapter.getInitialState({
    // set initial required properties
    // ??? if this was an API response, wouldn't we already have the groups
    // set with their tasks???
    taskEntities: {},
    loaded: false,
});

const reducer = createReducer(
    initialTasksState,
    on(TasksActions.updateSelectedTaskId, (state, { id }) => ({
        ...state,
        selectedId: id,
    })),
    on(TasksActions.moveTaskSuccess, (state, { groups, task }) =>
        tasksAdapter.setAll(groups, {
            ...state,
            taskEntities: { ...state.taskEntities, [task.id]: task },
        })
    ),
    on(TasksActions.loadTaskGroups, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(TasksActions.loadTaskGroupsSuccess, (state, { groups, tasks }) =>
        tasksAdapter.setAll(groups, {
            ...state,
            taskEntities: tasks,
            loaded: true,
        })
    ),
    on(TasksActions.loadTaskGroupsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);

export function tasksReducer(state: TasksState | undefined, action: Action) {
    return reducer(state, action);
}
