import { NgModule } from '@angular/core';
import { RegistrationDialogComponent } from './registration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [RegistrationDialogComponent],
    imports: [MatDialogModule],
    exports: [RegistrationDialogComponent],
})
export class RegistrationDialogModule {}
