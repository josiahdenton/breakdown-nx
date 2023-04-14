import { Component, Input } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { TaskDetailsComponent } from '../task-details/task-details.component';

@Component({
    selector: 'breakdown-nx-task-tile',
    templateUrl: './task-tile.component.html',
    styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent {
    @Input() id = -1;
    // using a selector adds O(n) for each tile, resulting in O(n^2)
    // to render the dashboard where n is the number of tasks.
    // PLAN: have the task details come from the column...
    // performance is then O(KN) where K is the number of columns.
    // columns should rarely ever go above > 10, so performance is not a concern here.
    @Input() title = '';
    @Input() content = '';

    constructor(private dialog: Dialog) {}

    openTaskDetails() {
        // PLAN: pass data to component, crate an interface...
        this.dialog.open(TaskDetailsComponent, {
            data: { id: this.id },
        });
    }
}
