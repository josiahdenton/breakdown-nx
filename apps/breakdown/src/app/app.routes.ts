import { Route } from '@angular/router';

// top level routing
export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () =>
            import('@breakdown-nx/features/task-dashboard').then(
                (m) => m.TaskDashboardModule
            ),
    },
];
