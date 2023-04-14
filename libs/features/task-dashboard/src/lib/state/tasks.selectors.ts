import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_FEATURE_KEY, TasksState, tasksAdapter } from './tasks.reducer';

// Lookup the 'Tasks' feature state managed by NgRx
export const selectTasksState =
    createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

const { selectAll, selectEntities } = tasksAdapter.getSelectors();

// TODO: may rmv some of these selectors...
export const selectGroupsLoaded = createSelector(
    selectTasksState,
    (state: TasksState) => state.loaded
);

export const selectError = createSelector(
    selectTasksState,
    (state: TasksState) => state.error
);

export const selectAllGroups = createSelector(
    selectTasksState,
    (state: TasksState) => selectAll(state)
);

export const selectGroupEntities = createSelector(
    selectTasksState,
    (state: TasksState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
    selectTasksState,
    (state: TasksState) => state.selectedId
);

export const selectTaskEntities = createSelector(
    selectTasksState,
    (state: TasksState) => state.taskEntities
);

// export const selectTaskEntity = createSelector(
//     selectAllGroups,
//     selectSelectedId,
//     (groups, selectedId) =>
//         selectedId
//             ? // TODO: likely need to restructure how we handle searching...
//               // maybe tasks do belong in their own array and the group only
//               // refers to the ids...

//               // PLAN: create a Dictionary/Record for task entities
//               // this dictionary has ID: task mapping. The task group
//               // will only store task IDs and we will have a selector to
//               // select task ids...
//               // by selecting the entity store you get O(1) lookup, which
//               // is perfect for what we need...
//               [...groups.map((group) => group.tasks)]
//                   .reduce((prev, curr) => prev.concat(curr), [])
//                   .find((task) => task.id === selectedId)
//             : undefined
// );
