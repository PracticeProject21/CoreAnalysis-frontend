import { NgModule } from '@angular/core';
import { DownloadPageComponent } from './download-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';


@NgModule({
    declarations: [DownloadPageComponent, SafeUrlPipe],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [DownloadPageComponent],
    providers: [SafeUrlPipe],
})
export class DownloadPageModule {}
