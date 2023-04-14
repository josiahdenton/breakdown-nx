import { Task, TaskGroup } from './tasks.model';

export interface SystemState {
    tasks: Record<number, Task>;
    taskGroups: TaskGroup[];
    // zettels: Zettel[];
    // zettelConnections: ZettelLink[];
    // user: User; // stores user preferences
}

export type SystemStateSlice = 'tasks' | 'taskGroups';
