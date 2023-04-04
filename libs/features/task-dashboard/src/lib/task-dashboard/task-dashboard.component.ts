import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop'

import { CardComponent } from '@breakdown-nx/shared/components';
import { TaskCollection } from '@breakdown-nx/core/models';

import { TaskColumnComponent } from '../task-column/task-column.component';

@Component({
  selector: 'breakdown-nx-task-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, TaskColumnComponent, DragDropModule],
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss'],
})
export class TaskDashboardComponent {

  columns: TaskCollection[] = [
    {
      id: 1,
      name: 'Backlog',
      tasks: [
        {
          id: 1,
          title: 'Y1',
          content: 'here is some content we would display in the tile. not sure how much I should put here... lol',
          created: Date.now(),
          lastEdited: Date.now()
        },
        {
          id: 1,
          title: 'Y2',
          content: 'here is some content we would display in the tile. not sure how much I should put here... lol',
          created: Date.now(),
          lastEdited: Date.now()
        },
        {
          id: 1,
          title: 'Y3',
          content: 'here is some content we would display in the tile. not sure how much I should put here... lol',
          created: Date.now(),
          lastEdited: Date.now()
        },
        {
          id: 1,
          title: 'Y4',
          content: 'here is some content we would display in the tile. not sure how much I should put here... lol',
          created: Date.now(),
          lastEdited: Date.now()
        }
      ]
    },
    {
      id: 2,
      name: 'In Progress',
      tasks: [
        {
          id: 1,
          title: 'Y4',
          content: 'here is some content we would display in the tile. not sure how much I should put here... lol',
          created: Date.now(),
          lastEdited: Date.now()
        }
      ]
    },
    {
      id: 3,
      name: 'Done',
      tasks: [

      ]
    },
  ]

  /**
   * generates a HTML tag ID for the task column 
   * @param id the id of the task column
   * @returns the HTML tag ID in the format `task-column-<number>`
   */
  columnId(id: number): string {
    return `task-column-${id}`
  }

  /**
   * only returns the column IDs that don't match ID
   * @param id the column to exclude
   * @returns an array of all tag ID for the task columns
   */
  connectedColumnIds(id: number): string[] {
    return this.columns.filter((col) => col.id !== id).map((col) => this.columnId(col.id));
  }

}
