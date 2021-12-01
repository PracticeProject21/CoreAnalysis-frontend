import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';
import { AuthQuery } from '../auth.query';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'download-page',
    templateUrl: './download-page.component.html',
    styleUrls: ['./download-page.component.scss'],
})
export class DownloadPageComponent implements OnInit, OnDestroy{
    @ViewChild('file')
    fileInput: ElementRef<HTMLInputElement>;

    readonly fileControl = new FormControl();

    readonly typeControl = new FormControl();

    readonly isLogged$ = this.authQuery.isLogged$;

    images: any = [];

    imagesView: any = [];

    idRange: any = [];

    loading = false;

    readonly subscription = new Subscription();

    constructor(
        private requestService: RequestService,
        private authQuery: AuthQuery,
        private router: Router,
    ) {}

    ngOnInit(): void {
        const inputChanges$ = this.fileControl.valueChanges.subscribe(() => {
            if (this.fileInput.nativeElement.files?.length) {
                for (let i=0; i < this.fileInput.nativeElement.files.length; i++) {
                    this.images.push(this.fileInput.nativeElement.files[i]);
                    this.getImage(this.images.length -1, this.imagesView);
                }
            }
            this.idRange = Array(this.images.length).fill(0).map((x,i)=> i);
        });

        this.subscription.add(inputChanges$);
    }

    addImage(): void {
        this.fileInput.nativeElement.click();
    }

    getImage(index: number, imagesView: any): void {
        let reader = new FileReader();
        reader.readAsDataURL(this.images[index]);
        reader.onload = function () {
            imagesView.push(reader.result);
        }
    }

    deleteImage(id: number): void {
        this.images = this.images.slice(0, id).concat(this.images.slice(id + 1));
        this.imagesView = this.imagesView.slice(0, id).concat(this.imagesView.slice(id + 1));
        this.idRange = this.idRange.slice(0, this.idRange.length - 1);
    }

    sendImage(): void {
        this.loading = true;
        const sendRequest$ = this.requestService
            .sendImage(this.images[0], this.images[0].name, this.typeControl.value)
            .subscribe(report => this.router.navigateByUrl(`report/${report.report_id}`));

        this.subscription.add(sendRequest$);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
