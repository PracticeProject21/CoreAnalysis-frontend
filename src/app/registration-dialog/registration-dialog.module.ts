import { NgModule } from '@angular/core';
import { RegistrationDialogComponent } from './registration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
    declarations: [RegistrationDialogComponent],
    imports: [MatDialogModule, ReactiveFormsModule, MatButtonToggleModule],
    exports: [RegistrationDialogComponent],
})
export class RegistrationDialogModule {}
