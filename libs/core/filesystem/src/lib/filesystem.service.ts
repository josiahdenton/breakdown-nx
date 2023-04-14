import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SystemStateSlice, SystemState } from '@breakdown-nx/core/models';

@Injectable({
    providedIn: 'root',
})
export class FilesystemService {
    // TODO this should be set by load...
    // for now, we set manually
    private _parsed: SystemState = {
        tasks: {
            1: {
                id: 1,
                groupId: 1,
                title: 'Y1',
                content:
                    'here is some content we would display in the tile. not sure how much I should put here... lol',
                created: Date.now(),
                lastEdited: Date.now(),
            },
            2: {
                id: 2,
                groupId: 1,
                title: 'Y2',
                content:
                    'here is some content we would display in the tile. not sure how much I should put here... lol',
                created: Date.now(),
                lastEdited: Date.now(),
            },
            3: {
                id: 3,
                groupId: 1,
                title: 'Y3',
                content:
                    'here is some content we would display in the tile. not sure how much I should put here... lol',
                created: Date.now(),
                lastEdited: Date.now(),
            },
            4: {
                id: 4,
                groupId: 1,
                title: 'Y4',
                content:
                    'here is some content we would display in the tile. not sure how much I should put here... lol',
                created: Date.now(),
                lastEdited: Date.now(),
            },
        },
        taskGroups: [
            {
                id: 1,
                name: 'Ready',
                tasks: [1, 2, 3, 4],
            },
            {
                id: 2,
                name: 'In Progress',
                tasks: [],
            },
            {
                id: 3,
                name: 'Done',
                tasks: [],
            },
            // TODO: need to add a task archive!
            // perhaps tasks need an previousGroupId for when they are moved to the archive...
            // use a new interface for this...
        ],
    };

    // load() will update this
    get state() {
        return this._parsed;
    }

    /**
     *
     * @returns an observable that emits when the file has successfully loaded
     */
    load(): Observable<boolean> {
        // TODO: load and parse
        return of(true);
    }

    // TODO: make observable return an Error type...
    updateSlice(slice: SystemStateSlice): Observable<boolean> {
        // TODO: implement this...
        return of(!!slice);
    }
}
