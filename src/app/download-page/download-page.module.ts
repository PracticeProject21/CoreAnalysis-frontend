import { NgModule } from '@angular/core';
import { DownloadPageComponent } from './download-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [DownloadPageComponent],
    imports: [CommonModule, RouterModule],
    exports: [DownloadPageComponent],
})
export class DownloadPageModule {}
