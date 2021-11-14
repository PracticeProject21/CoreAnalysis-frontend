import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequestService } from '../request.service';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
  selector: 'users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss'],
})
export class UsersDialogComponent {
    readonly inputControl = new FormControl();

    users: any = [];

    constructor(
        private dialogRef: MatDialogRef<UsersDialogComponent>,
        private requestService: RequestService,
        private matDialog: MatDialog,
    ) {
        this.inputControl.valueChanges.pipe(
            tap((value) => {
                this.requestService.getUsers(value)
                    .subscribe(response => this.users = response)
            })
        ).subscribe();
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    openRegister(): void {
        this.matDialog.open(RegistrationDialogComponent, {data: true}).afterClosed().subscribe(
            (value) => {
                if (value) {
                    this.requestService.register(value.login, value.password, value.isAdmin)
                        .subscribe();
                }
            }
        );
        this.inputControl.setValue(this.inputControl.value);
    }

    editUserInfo(id: number): void {
        this.matDialog.open(RegistrationDialogComponent, {data: false}).afterClosed().subscribe(
            (value) => {
                if (value) {
                    this.requestService.changeUserInfo(id, value.login, value.password, value.isAdmin)
                        .subscribe();
                }
            }
        );
        this.requestService.getUsers(this.inputControl.value)
            .subscribe(response => this.users = response);
    }
}
