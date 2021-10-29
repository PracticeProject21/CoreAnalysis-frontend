import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'add-property-dialog',
    templateUrl: './add-property-dialog.component.html',
    styleUrls: ['./add-property-dialog.component.scss'],
})
export class AddPropertyDialogComponent {
    constructor(private dialogRef: MatDialogRef<AddPropertyDialogComponent>) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

    addProperty(): void {
        //
        this.dialogRef.close();
    }
}
