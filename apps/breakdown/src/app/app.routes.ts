import { Route } from '@angular/router';

import { TaskDashboardComponent } from '@breakdown-nx/features/task-dashboard';


export const appRoutes: Route[] = [
    {
        path: '',
        component: TaskDashboardComponent
    }
];
