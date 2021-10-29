import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'authorization-page',
    templateUrl: './registration-dialog.component.html',
    styleUrls: ['./registration-dialog.component.scss'],
})
export class RegistrationDialogComponent {
    constructor(private dialogRef: MatDialogRef<RegistrationDialogComponent>) {}

    closeDialog(): void {
        this.dialogRef.close();
    }
}
