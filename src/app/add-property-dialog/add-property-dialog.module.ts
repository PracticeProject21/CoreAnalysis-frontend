import { NgModule } from '@angular/core';
import { AddPropertyDialogComponent } from './add-property-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [AddPropertyDialogComponent],
    imports: [MatDialogModule, BrowserAnimationsModule, ReactiveFormsModule],
    exports: [AddPropertyDialogComponent],
})
export class AddPropertyDialogModule {}
