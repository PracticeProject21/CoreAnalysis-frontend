import { Routes } from '@angular/router';
import { DownloadPageComponent } from './download-page/download-page.component';
import { ReportPageComponent } from './report-page/report-page.component';

export const routes: Routes = [
    {
        path: '',
        component: DownloadPageComponent,
    },
    {
        path: 'report',
        component: ReportPageComponent,
    },
]
