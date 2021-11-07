import { NgModule } from '@angular/core';
import { RegistrationDialogComponent } from './registration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [RegistrationDialogComponent],
    imports: [MatDialogModule, ReactiveFormsModule],
    exports: [RegistrationDialogComponent],
})
export class RegistrationDialogModule {}
