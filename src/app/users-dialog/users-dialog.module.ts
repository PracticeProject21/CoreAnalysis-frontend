import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDialogComponent } from './users-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [UsersDialogComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [UsersDialogComponent],
})
export class UsersDialogModule { }
