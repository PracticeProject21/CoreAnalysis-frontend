import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.scss']
})
export class ReportsPageComponent implements OnInit, OnDestroy {
    reports: any;

    readonly subscription = new Subscription();

    constructor(private requestService: RequestService, private router: Router) {}

    ngOnInit(): void {
        const reportsRequest$ = this.requestService
            .getReports(true)
            .subscribe(reports => this.reports = reports);

        this.subscription.add(reportsRequest$);
    }

    deleteReport(report): void {
        const index = this.reports.indexOf(report);
        this.reports = this.reports.slice(0, index).concat(this.reports.slice(index + 1));

        const deleteRequest$ = this.requestService.deleteReport(report.report_id).subscribe();
        this.subscription.add(deleteRequest$);
    }

    editReport(id: number): void {
        this.router.navigateByUrl(`report/${id}`);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
