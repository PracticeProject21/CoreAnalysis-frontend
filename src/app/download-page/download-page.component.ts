import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RequestService } from '../request.service';
import { AuthStore } from '../auth.store';

@Component({
    selector: 'download-page',
    templateUrl: './download-page.component.html',
    styleUrls: ['./download-page.component.scss'],
})
export class DownloadPageComponent {
    @ViewChild('file')
    fileInput: ElementRef<HTMLInputElement>;

    readonly fileControl = new FormControl();

    readonly typeControl = new FormControl();

    images: any = [];

    imagesView: any = [];

    idRange: any = [];

    constructor(
        private requestService: RequestService,
        private authStore: AuthStore,
    ) {
        this.fileControl.valueChanges.subscribe(() => {
            if (this.fileInput.nativeElement.files?.length) {
                for (let i=0; i < this.fileInput.nativeElement.files.length; i++) {
                    this.images.push(this.fileInput.nativeElement.files[i]);
                    this.getImage(this.images.length -1, this.imagesView);
                }
            }
            this.idRange = Array(this.images.length).fill(0).map((x,i)=> i);
        });
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
        this.requestService
            .sendImage(this.images[0], this.typeControl.value)
            .subscribe(report => this.authStore.update({
                report: report as string,
            }));
    }
}
