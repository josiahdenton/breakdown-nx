import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Task } from '@breakdown-nx/core/models';

import { TaskTileComponent } from '../task-tile/task-tile.component';

@Component({
  selector: 'breakdown-nx-task-column',
  standalone: true,
  imports: [CommonModule, TaskTileComponent, DragDropModule],
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.scss'],
})
export class TaskColumnComponent {
  @Input() title = '';
  @Input() tasks: Task[] = [];
  @Input() connectedColumns: string[] = [];
  @Input() columnId = '';

  drop(event: CdkDragDrop<Task[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // moved to a different column!
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
