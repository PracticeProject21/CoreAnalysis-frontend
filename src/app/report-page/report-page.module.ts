import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ReportPageComponent],
    imports: [CommonModule, MatDialogModule, RouterModule],
    exports: [ReportPageComponent],
})
export class ReportPageModule {}
