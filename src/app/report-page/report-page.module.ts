import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportPageComponent } from './report-page.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [ReportPageComponent],
    imports: [CommonModule, MatDialogModule],
    exports: [ReportPageComponent],
})
export class ReportPageModule {}
