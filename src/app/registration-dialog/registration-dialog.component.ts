import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';

@Component({
    selector: 'authorization-page',
    templateUrl: './registration-dialog.component.html',
    styleUrls: ['./registration-dialog.component.scss'],
})
export class RegistrationDialogComponent {
    @ViewChild('passwordInput')
    readonly passwordInput: ElementRef<HTMLInputElement>;

    @ViewChild('repeatInput')
    readonly repeatInput: ElementRef<HTMLInputElement>;

    readonly loginControl = new FormControl();

    readonly passwordControl = new FormControl();

    readonly repeatPasswordControl = new FormControl();

    constructor(
        private dialogRef: MatDialogRef<RegistrationDialogComponent>,
        private requestService: RequestService,
    ) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

    togglePasswordView(event: Event): void {
        const input = this.passwordInput.nativeElement.parentElement?.contains(event.target as Node)
            ? this.passwordInput : this.repeatInput;
        const button = event.currentTarget as HTMLElement;
        const isTextType = input.nativeElement.type === 'text';
        input.nativeElement.type = isTextType ? 'password' : 'text';
        (button.firstChild as HTMLElement).classList.toggle('toggle-visibility');
        (button.lastChild as HTMLElement).classList.toggle('toggle-visibility');
    }

    register(): void {
        this.requestService
            .register(this.loginControl.value.trim(), this.passwordControl.value.trim())
            .subscribe();
        this.closeDialog();
    }
}
