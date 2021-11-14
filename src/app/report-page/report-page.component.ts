import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyDialogComponent } from '../add-property-dialog/add-property-dialog.component';
import { RequestService } from '../request.service';
import { AuthStore } from '../auth.store';

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
export class ReportPageComponent implements OnDestroy {
    segments = this.authStore.getValue().report['segments'].map(item => {
        return {...item, properties: item['properties'].map(property => property)}
    });

    reportIsReady = 0;

    constructor(
        private matDialog: MatDialog,
        private requestService: RequestService,
        private authStore: AuthStore,
    ) {}

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

    ngOnDestroy(): void {
        this.authStore.update({report: undefined});
    }
}
