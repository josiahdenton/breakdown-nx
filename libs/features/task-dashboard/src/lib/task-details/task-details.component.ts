import { Component, Inject } from '@angular/core';

import { TaskDetailsDialogData } from '@breakdown-nx/core/models';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Store } from '@ngrx/store';
import { selectTaskEntities } from '../state/tasks.selectors';
import { map } from 'rxjs';

@Component({
    selector: 'breakdown-nx-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent {
    // TODO: we use the selected ID to grab task details!
    task$ = this.store
        .select(selectTaskEntities)
        .pipe(map((taskEntities) => taskEntities[this.details.id]));

    constructor(
        @Inject(DIALOG_DATA) private details: TaskDetailsDialogData,
        private store: Store
    ) {}
}
