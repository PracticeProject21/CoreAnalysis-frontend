import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterDialogComponent } from './enter-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [EnterDialogComponent],
    imports: [CommonModule, MatDialogModule, ReactiveFormsModule],
    exports: [EnterDialogComponent],
})
export class EnterDialogModule {}
