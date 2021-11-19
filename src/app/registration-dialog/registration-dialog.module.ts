import { NgModule } from '@angular/core';
import { RegistrationDialogComponent } from './registration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { SuccessNotificationModule } from '../success-notification/success-notification.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
    declarations: [RegistrationDialogComponent],
    imports: [
        CommonModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        SuccessNotificationModule,
        MatSnackBarModule,
    ],
    exports: [RegistrationDialogComponent],
})
export class RegistrationDialogModule {}
