import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnterDialogComponent } from '../enter-dialog/enter-dialog.component';
import { RegistrationDialogComponent } from '../registration-dialog/registration-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private matDialog: MatDialog) {}

    openModal(isEnter: boolean): void {
        console.log('c');
        isEnter
            ? this.matDialog.open(EnterDialogComponent)
            : this.matDialog.open(RegistrationDialogComponent);
    }
}
