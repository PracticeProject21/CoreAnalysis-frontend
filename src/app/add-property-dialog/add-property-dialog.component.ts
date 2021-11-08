import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'add-property-dialog',
    templateUrl: './add-property-dialog.component.html',
    styleUrls: ['./add-property-dialog.component.scss'],
})
export class AddPropertyDialogComponent {
    readonly propertyControl = new FormControl();

    readonly valueControl = new FormControl();

    properties: any = [];

    constructor(
        @Inject(MAT_DIALOG_DATA)
        readonly info,
        private dialogRef: MatDialogRef<AddPropertyDialogComponent>
    ) {
        info.forEach(property => this.properties.push(property['title']));
    }

    closeDialog(): void {
        this.dialogRef.close(undefined);
    }

    addProperty(): void {
        const finalProperty = this.info.find(item => item['title'] === this.propertyControl.value);
        const finalValue = finalProperty['values'].find(item => item['title'] === this.valueControl.value);

        this.dialogRef.close({
            "name": finalProperty.name,
            "title": finalProperty.title,
            "value": finalValue
        });
    }

    select(option: string, isPropertyInput: boolean): void {
        const control = isPropertyInput ? this.propertyControl : this.valueControl;
        control.setValue(option);
    }

    markAsTouched(isPropertyInput: boolean): void {
        const control = isPropertyInput ? this.propertyControl : this.valueControl;
        control.markAsTouched();
    }

    clearInput(isPropertyInput: boolean): void {
        if (isPropertyInput) {
            this.propertyControl.setValue('');
            this.valueControl.setValue('');
        }
        else {
            this.valueControl.setValue('');
        }
    }

    getValues(property: string) {
        const item = this.info.find(item => item['title'] === property);
        return item['values'];
    }
}
