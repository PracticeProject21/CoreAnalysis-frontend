import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RequestService {
    report$ = new Subject<string>();

    constructor(private http: HttpClient) {}

    sendImage(image: File, type: 'sun' | 'ultraviolet'): Observable<any> {
        const params = new HttpParams().set('type', type);
        return this.http.post('http://coreanalysis.herokuapp.com/api/report/', image, {params: params})
            .pipe(
                catchError(this.handleError)
            );
    }

    getReport(): Observable<any> {
        return this.http.get('').pipe(
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


