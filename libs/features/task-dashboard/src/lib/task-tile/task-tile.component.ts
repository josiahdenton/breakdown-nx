import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CardComponent } from '@breakdown-nx/shared/components';

@Component({
  selector: 'breakdown-nx-task-tile',
  standalone: true,
  imports: [CommonModule, CardComponent, DragDropModule],
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent {
  @Input() title = '';
  @Input() content = '';
}
