import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RegistrationDialogModule } from '../registration-dialog/registration-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { EnterDialogModule } from '../enter-dialog/enter-dialog.module';


@NgModule({
    declarations: [HeaderComponent],
    imports: [RegistrationDialogModule, MatDialogModule, EnterDialogModule],
    exports: [HeaderComponent],
})
export class HeaderModule {}
