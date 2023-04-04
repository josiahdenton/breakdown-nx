export interface Task {
    id: number;    
    title: string; // allowed to be empty
    content: string; // consumed by ngx-markdown
    created: number;
    lastEdited: number;
    // history: string[] // should we care about doing something like this??
    // referredZettels: number[] // ids of Zettels referred to
}

export interface TaskCollection {
    id: number;
    name: string;
    tasks: Task[];
}