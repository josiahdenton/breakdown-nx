export interface Task {
    id: number; // ID of the task, unique to each task
    groupId: number; // ID of the group this task belongs to, unique to eache group
    title: string; // allowed to be empty -- TODO: may remove in the future and simply use content only!
    content: string; // consumed by ngx-markdown
    created: number;
    lastEdited: number;
    // history: string[] // should we care about doing something like this? maybe...
    // linkedZettelIds: number[] // ids of Zettels linked to this task...
}

export interface TaskGroup {
    id: number;
    name: string;
    tasks: number[]; // an array of task IDs that belong to this group
}

export interface TaskMoveEvent {
    previousGroupId: number;
    nextGroupId: number;
    previousOrder: number;
    nextOrder: number;
}

export interface TaskDetailsDialogData {
    id: number;
}
