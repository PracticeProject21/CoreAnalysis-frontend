import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';
import { SuccessNotificationComponent } from '../success-notification/success-notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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

    readonly adminControl = new FormControl();

    error: string;

    constructor(
        private dialogRef: MatDialogRef<RegistrationDialogComponent>,
        private requestService: RequestService,
        private matSnackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA)
        readonly id?: number,
    ) {}

    closeDialog(): void {
        this.dialogRef.close(undefined);
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

    finish(): void {
        if (!this.id) {
            this.requestService
                .register(this.loginControl.value, this.passwordControl.value, this.adminControl.value)
                .subscribe(() => {
                        this.matSnackBar.openFromComponent(SuccessNotificationComponent,
                            {
                                horizontalPosition: 'end',
                                verticalPosition: 'top',
                                duration: 5000,
                                data: {
                                    text: 'Пользователь зарегистрирован',
                                }
                            });
                    this.dialogRef.close()
                    },
                    error => {
                    if (error.status === 409) {
                        this.error = 'Пользователь с таким именем уже существует';
                    }
                })
        } else {
            this.requestService
                .changeUserInfo(this.id, this.loginControl.value, this.passwordControl.value, this.adminControl.value)
                .subscribe(() => {
                        this.matSnackBar.openFromComponent(SuccessNotificationComponent,
                            {
                                horizontalPosition: 'end',
                                verticalPosition: 'top',
                                duration: 5000,
                                data: {
                                    text: 'Информация о пользователе изменена',
                                }
                            });
                    this.dialogRef.close()
                    },
                    error => {
                        if (error.status === 409) {
                            this.error = 'Пользователь с таким именем уже существует';
                        }
                })
        }
    }
}
