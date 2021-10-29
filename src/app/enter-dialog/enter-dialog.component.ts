import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'enter-page',
    templateUrl: './enter-dialog.component.html',
    styleUrls: ['./enter-dialog.component.scss'],
})
export class EnterDialogComponent {
    constructor(private dialogRef: MatDialogRef<EnterDialogComponent>) {}

    closeDialog(): void {
        this.dialogRef.close();
    }
}
