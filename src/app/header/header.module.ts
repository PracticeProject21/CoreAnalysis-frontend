import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RegistrationDialogModule } from '../registration-dialog/registration-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EnterDialogModule } from '../enter-dialog/enter-dialog.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, RegistrationDialogModule, MatDialogModule, EnterDialogModule, RouterModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
