import { Route } from '@angular/router';

import { TaskDashboardEntryComponent } from '@breakdown-nx/task-dashboard';

export const appRoutes: Route[] = [
    {
        path: '',
        component: TaskDashboardEntryComponent
    }
];
