import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyDialogComponent } from '../add-property-dialog/add-property-dialog.component';
import { RequestService } from '../request.service';
import { AuthStore } from '../auth.store';
import { Router } from '@angular/router';

function findSegment(array, element) {
    return array.find(item => {
        if (JSON.stringify(element) === JSON.stringify(item)) {
            return item;
        }
    });
}

@Component({
    selector: 'report-page',
    templateUrl: './report-page.component.html',
    styleUrls: ['./report-page.component.scss'],})
export class ReportPageComponent {
    report;

    segments;

    reportIsReady = 0;

    constructor(
        private matDialog: MatDialog,
        private requestService: RequestService,
        private authStore: AuthStore,
        private router: Router,
    ) {
        const parts = this.router.url.split('/');
        const reportId = parseInt(parts[parts.length - 1]);
        this.requestService
            .getReport(reportId)
            .subscribe(report => {
                this.report = report;
                this.segments = this.report.segments;
            });
    }

    openAddPropertyDialog(segment): void {
        this.requestService.getProperties(segment['properties'])
            .subscribe(response => {
                if (response.length !== 0) {
                    this.matDialog.open(AddPropertyDialogComponent, {
                        data: response,
                    }).afterClosed().subscribe(
                        result => {
                            if (result) {
                                let editingSegment = findSegment(this.segments, segment);
                                editingSegment['properties'].push(result);
                            }
                        }
                    )
                }
            });
    }

    editSegment(segment): void {
        let editingSegment = findSegment(this.segments, segment);
        editingSegment['editing'] = true;
        this.reportIsReady++;
    }

    saveSegment(segment): void {
        let editingSegment = findSegment(this.segments, segment);
        delete editingSegment['editing'];
        this.reportIsReady--;

        this.requestService
            .changeSegment(editingSegment['segment_id'], editingSegment['offset'], editingSegment['properties'])
            .subscribe();
    }

    deleteSegment(segment): void {
        const index = this.segments.indexOf(segment);
        this.segments = this.segments.slice(0, index).concat(this.segments.slice(index + 1));
    }

    deleteProperty(segment, property): void {
        const deletingProperty = findSegment(segment['properties'], property);
        const indexSeg = this.segments.indexOf(segment);
        const indexPr = segment['properties'].indexOf(deletingProperty);
        this.segments[indexSeg]['properties'] = this.segments[indexSeg]['properties'].slice(0, indexPr);
    }

    getSegmentOffset(offset: string): number {
        return parseInt((+offset * 1000).toString())/10;
    }

    getSegmentLength(offset: string, len: string): number {
        return Math.round(((+offset + +len) * 1000))/10;
    }

    changeOffset(event: Event, segment): void {
        let editingSegment = findSegment(this.segments, segment);
        const offsetBefore = editingSegment['offset'];
        editingSegment['offset'] = (parseFloat((event.currentTarget as HTMLInputElement).value)/100)
            .toFixed(4).toString();
        editingSegment['len'] =
            (parseFloat(editingSegment['len']) - (-parseFloat(offsetBefore) + parseFloat(editingSegment['offset'])))
                .toFixed(4).toString();
        if (this.segments.indexOf(segment) !== 0) {
            let previousSegment = this.segments[this.segments.indexOf(segment) - 1];
            previousSegment['len'] = (parseFloat(previousSegment['len']) + (-parseFloat(offsetBefore) + parseFloat(editingSegment['offset'])))
                .toFixed(4).toString();
        }
    }

    handleOffset(event: KeyboardEvent): void {
        let value = (event.currentTarget as HTMLInputElement).value;
        const regExp = /^[0-9]{1,2}(.[0-9]?)?$/;
        if (!regExp.test(value)) {
            (event.currentTarget as HTMLInputElement).value = value.slice(0, value.length - 1);
        }
    }
}
