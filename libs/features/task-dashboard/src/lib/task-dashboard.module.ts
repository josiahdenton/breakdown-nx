import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CardComponent } from '@breakdown-nx/shared/components';

import { TaskTileComponent } from './task-tile/task-tile.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskDashboardHeaderMenuComponent } from './task-dashboard-header-menu/task-dashboard-header-menu.component';
import { TaskDashboardHeaderComponent } from './task-dashboard-header/task-dashboard-header.component';
import { TaskColumnComponent } from './task-column/task-column.component';
import { TaskColumnHeaderComponent } from './task-column-header/task-column-header.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import * as fromTasks from './state/tasks.reducer';
import { TasksEffects } from './state/tasks.effects';

const routes: Route[] = [
  {
    path: '',
    component: TaskDashboardComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    CardComponent,
    DragDropModule,
    DialogModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromTasks.TASKS_FEATURE_KEY, fromTasks.tasksReducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  declarations: [
    TaskTileComponent,
    TaskDetailsComponent,
    TaskColumnComponent,
    TaskColumnHeaderComponent,
    TaskDashboardComponent,
    TaskDashboardHeaderComponent,
    TaskDashboardHeaderMenuComponent,
  ],
  exports: [TaskDashboardComponent, RouterModule],
})
export class TaskDashboardModule {}
