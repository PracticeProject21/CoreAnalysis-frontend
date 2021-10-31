import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyDialogComponent } from '../add-property-dialog/add-property-dialog.component';
import { RequestService } from '../request.service';

@Component({
    selector: 'report-page',
    templateUrl: './report-page.component.html',
    styleUrls: ['./report-page.component.scss'],})
export class ReportPageComponent {
    readonly report$ = this.requestService.report$;

    constructor(
        private matDialog: MatDialog,
        private requestService: RequestService
    ) {}

    openAddPropertyDialog(): void {
        this.matDialog.open(AddPropertyDialogComponent);
    }
}
