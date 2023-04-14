import { Injectable } from '@angular/core';

import { FilesystemService } from '@breakdown-nx/core/filesystem';
import { Task, TaskGroup } from '@breakdown-nx/core/models';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TaskFileSystemApiService {
    constructor(private _filesystemService: FilesystemService) {}

    /**
     *
     * @returns if with a successful load, a
     * list of tasks and groups, along with a boolean
     *
    // TODO: need to replace boolean with FileLoadError that contains a 
    // msg to display to user...
     */
    // loadTaskState
    loadTaskState(): Observable<[TaskGroup[], Record<number, Task>, boolean]> {
        return this._filesystemService.load().pipe(
            map((success) => {
                if (!success) {
                    return [[], [], false];
                }

                return [
                    this._filesystemService.state.taskGroups,
                    this._filesystemService.state.tasks,
                    true,
                ];
            })
        );
    }

    // loadZettelState()
}
