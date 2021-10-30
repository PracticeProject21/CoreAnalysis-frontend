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
import { HttpClientModule } from '@angular/common/http';
import { DownloadPageService } from './download-page/download-page.service';
import { ReportPageService } from './report-page/report-page.service';


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
        HttpClientModule,
    ],
    providers: [DownloadPageService, ReportPageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
