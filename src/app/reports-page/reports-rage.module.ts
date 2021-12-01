import { NgModule } from '@angular/core';
import { ReportsPageComponent } from './reports-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ReportsPageComponent],
    imports: [CommonModule, RouterModule],
    exports: [ReportsPageComponent],
})
export class ReportsRageModule {}
