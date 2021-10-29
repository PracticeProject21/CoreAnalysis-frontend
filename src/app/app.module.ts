import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HeaderModule } from './header/header.module';
import { EnterDialogModule } from './enter-dialog/enter-dialog.module';
import { RegistrationDialogModule } from './registration-dialog/registration-dialog.module';
import { DownloadPageModule } from './download-page/download-page.module';
import { ReportPageModule } from './report-page/report-page.module';
import { AddPropertyDialogModule } from './add-property-dialog/add-property-dialog.module';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HeaderModule,
        EnterDialogModule,
        RegistrationDialogModule,
        DownloadPageModule,
        ReportPageModule,
        AddPropertyDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
