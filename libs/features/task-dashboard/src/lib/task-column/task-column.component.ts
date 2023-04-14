import { Component, Input } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';

import { TaskGroup } from '@breakdown-nx/core/models';

import * as TaskActions from '../state/tasks.actions';
import { selectTaskEntities } from '../state/tasks.selectors';
import { filter } from 'rxjs';

@Component({
    selector: 'breakdown-nx-task-column',
    templateUrl: './task-column.component.html',
    styleUrls: ['./task-column.component.scss'],
})
export class TaskColumnComponent {
    @Input() group!: TaskGroup;
    @Input() connectedColumns: string[] = [];
    @Input() columnId = '';

    tasks$ = this._store
        .select(selectTaskEntities)
        .pipe(filter((tasks) => Object.keys(tasks).length > 0));

    constructor(private _store: Store) {}

    drop(event: CdkDragDrop<TaskGroup>) {
        this._store.dispatch(
            TaskActions.moveTask({
                previousGroupId: event.previousContainer.data.id,
                nextGroupId: event.container.data.id,
                previousOrder: event.previousIndex,
                nextOrder: event.currentIndex,
            })
        );
    }
}
