import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterDialogComponent } from '../enter-dialog/enter-dialog.component';
import { AuthQuery } from '../auth.query';
import { AuthStore } from '../auth.store';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    readonly isLogged$ = this.authQuery.isLogged$;

    readonly username$ = this.authQuery.username$;

    readonly isAdmin$ = this.authQuery.isAdmin$;

    showOutImage = false;

    constructor (
        private matDialog: MatDialog,
        private authQuery: AuthQuery,
        private authStore: AuthStore,
        private router: Router,
    ) {}

    openModal(isEnter: boolean): void {
        isEnter
            ? this.matDialog.open(EnterDialogComponent)
            : this.matDialog.open(UsersDialogComponent);
    }

    logOut(): void {
        this.authStore.update({ isLogged: false });
        this.router.navigateByUrl('');
    }

    toggleOutIcon(): void {
        this.showOutImage = ! this.showOutImage;
    }
}
