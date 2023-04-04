import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@breakdown-nx/shared/components';

@Component({
  selector: 'breakdown-nx-task-tile',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task-tile.component.html',
  styleUrls: ['./task-tile.component.scss'],
})
export class TaskTileComponent {
  @Input() title = '';
  @Input() content = '';
}
