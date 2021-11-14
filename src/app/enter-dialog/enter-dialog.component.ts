import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';
import { AuthStore } from '../auth.store';

@Component({
    selector: 'enter-page',
    templateUrl: './enter-dialog.component.html',
    styleUrls: ['./enter-dialog.component.scss'],
})
export class EnterDialogComponent {
    @ViewChild('passwordInput')
    readonly passwordInput: ElementRef<HTMLInputElement>;

    readonly loginControl = new FormControl();

    readonly passwordControl = new FormControl();

    constructor(
        private dialogRef: MatDialogRef<EnterDialogComponent>,
        private requestService: RequestService,
        private authStore: AuthStore,
    ) {}

    closeDialog(): void {
        this.dialogRef.close();
    }

    togglePasswordView(event: Event): void {
        const button = event.currentTarget as HTMLElement;
        const input = this.passwordInput;
        const isTextType = input.nativeElement.type === 'text';
        input.nativeElement.type = isTextType ? 'password' : 'text';
        (button.firstChild as HTMLElement).classList.toggle('toggle-visibility');
        (button.lastChild as HTMLElement).classList.toggle('toggle-visibility');
    }

    authorize(): void {
        this.requestService
            .getToken(this.loginControl.value.trim(), this.passwordControl.value.trim())
            .subscribe(response => {
                this.authStore.update({
                    token: response.token,
                })
                this.requestService
                    .getUserInfo()
                    .subscribe(response => {
                        this.authStore.update({
                            isLogged: true,
                            isAdmin: response.is_admin,
                            username: response.name,
                        })
                    });
            })
        this.closeDialog();
    }
}
