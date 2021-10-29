import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterDialogComponent } from './enter-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [EnterDialogComponent],
    imports: [CommonModule, MatDialogModule],
    exports: [EnterDialogComponent],
})
export class EnterDialogModule {}
