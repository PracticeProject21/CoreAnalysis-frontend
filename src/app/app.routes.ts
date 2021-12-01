import { Routes } from '@angular/router';
import { DownloadPageComponent } from './download-page/download-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ReportGuard } from './report.guard';
import { ReportsPageComponent } from './reports-page/reports-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DownloadPageComponent,
    },
    {
        path: 'report/:reportId',
        component: ReportPageComponent,
        canActivate: [ReportGuard],
    },
    {
        path: 'reports',
        component: ReportsPageComponent,
        canActivate: [ReportGuard],
    }
]
