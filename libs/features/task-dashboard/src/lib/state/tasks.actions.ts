import { createAction, props } from '@ngrx/store';

import { Task, TaskGroup, TaskMoveEvent } from '@breakdown-nx/core/models';

// TODO: in the future, init should call the task service, this will load the JSON blob uploaded by the user

const key = '[Tasks]';

export const updateSelectedTaskId = createAction(
    `${key} Update Selected Task Id`,
    props<{ id: number }>()
);

/**
 * uses group ID to choose which TaskGroup to update
 */
export const updateSelectedTaskGroup = createAction(
    `${key} Update Task Group`,
    props<{ groupId: number; group: TaskGroup }>()
);

export const moveTask = createAction(
    `${key} Move Task`,
    props<TaskMoveEvent>()
);

export const moveTaskSuccess = createAction(
    `${key} Move Task Success`,
    props<{ groups: TaskGroup[]; task: Task }>()
    // TODO: need to determine if there is a more efficient way of performing this...
    // CONCERN: this could become a bottle neck...
);

export const moveTaskFailure = createAction(
    `${key} Move Task Failure`,
    props<{ error: string }>() // TODO: standardize errors
);

export const updateTask = createAction(
    `${key} Update Task`,
    props<{ id: number; update: Partial<Task> }>()
);

export const updateTaskSuccess = createAction(
    `${key} Update Task Success`,
    props<{ task: Task }>()
);

export const loadTaskGroups = createAction(`${key} Load Tasks`);

export const loadTaskGroupsSuccess = createAction(
    `${key} Load Task Groups Success`,
    props<{ groups: TaskGroup[]; tasks: Record<number, Task> }>()
);

export const loadTaskGroupsFailure = createAction(
    `${key} Load Tasks Failure`,
    props<{ error: any }>()
);
