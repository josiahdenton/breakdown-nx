import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';

import { selectAllGroups } from '../state/tasks.selectors';
import * as TaskActions from '../state/tasks.actions';

// TODO: perhaps rename to task-dashboard page ????
@Component({
    selector: 'breakdown-nx-task-dashboard',
    templateUrl: './task-dashboard.component.html',
    styleUrls: ['./task-dashboard.component.scss'],
})
export class TaskDashboardComponent implements OnInit {
    groups$ = this._store.select(selectAllGroups);
    groupIds$ = this._store
        .select(selectAllGroups)
        .pipe(map((taskGroups) => taskGroups.map((group) => group.id)));

    groupsWithIdList$ = combineLatest([this.groups$, this.groupIds$]).pipe(
        map(([groups, groupIds]) => ({ groups, groupIds }))
    );

    constructor(private _store: Store) {}

    ngOnInit() {
        this._store.dispatch(TaskActions.loadTaskGroups());
    }

    /**
     * generates a HTML tag ID for the task column
     * @param id the id of the task column
     * @returns the HTML tag ID in the format `task-column-<number>`
     */
    columnId(id: number): string {
        return `task-column-${id}`;
    }

    /**
     * only returns the column IDs that don't match ID
     * @param excludeId the column to exclude
     * @returns an array of all tag ID for the task columns
     */
    connectedColumnIds(excludeId: number, groupIds: number[]): string[] {
        return groupIds
            .filter((groupId) => excludeId !== groupId)
            .map((groupId) => this.columnId(groupId));
    }
}
