import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyDialogComponent } from '../add-property-dialog/add-property-dialog.component';

@Component({
    selector: 'report-page',
    templateUrl: './report-page.component.html',
    styleUrls: ['./report-page.component.scss'],})
export class ReportPageComponent {
    readonly cards = [
        {
            id: 1,
            properties: [
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
            ]
        },
        {
            id: 2,
            properties: [
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
            ]
        },
        {
            id: 3,
            properties: [
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
                {
                    name: 'Свойство',
                    value: 'Значение',
                },
            ]
        },
    ]

    constructor(private matDialog: MatDialog) {}

    openAddPropertyDialog(): void {
        this.matDialog.open(AddPropertyDialogComponent);
    }
}
