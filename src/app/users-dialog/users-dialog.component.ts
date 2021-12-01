import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RequestService } from '../request.service';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss'],
})
export class UsersDialogComponent implements OnInit, OnDestroy {
    readonly inputControl = new FormControl();

    users: any = [];

    readonly subscription = new Subscription();

    constructor(
        private dialogRef: MatDialogRef<UsersDialogComponent>,
        private requestService: RequestService,
        private matDialog: MatDialog,
    ) {}

    ngOnInit(): void {
        const inputChanges$ = this.inputControl.valueChanges.pipe(
            tap((value) => {
                this.requestService.getUsers(value)
                    .subscribe(response => this.users = response)
            })
        ).subscribe();

        this.subscription.add(inputChanges$);
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    openRegister(): void {
        this.matDialog.open(RegistrationDialogComponent);
        this.closeDialog();
        this.inputControl.setValue(this.inputControl.value);
    }

    editUserInfo(id: number): void {
        this.matDialog.open(RegistrationDialogComponent, {data: id});
        this.closeDialog();
        const getUsersRequest$ = this.requestService.getUsers(this.inputControl.value)
            .subscribe(response => this.users = response);

        this.subscription.add(getUsersRequest$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
