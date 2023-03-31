import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@breakdown-nx/shared/components';

@Component({
  selector: 'breakdown-nx-task-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss'],
})
export class TaskDashboardComponent {}
