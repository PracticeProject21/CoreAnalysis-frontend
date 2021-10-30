import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DownloadPageService {
    constructor(private http: HttpClient) {}

    sendImage(image: File): Observable<any> {
        return this.http.post('http://coreanalysis.herokuapp.com/api/report/', image)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError('Something bad happened; please try again.');
    }
}


