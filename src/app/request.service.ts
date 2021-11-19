import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthStore } from './auth.store';

@Injectable({providedIn: 'root'})
export class RequestService {
    readonly report$ = new Subject<string>();

    constructor(private http: HttpClient,
                private authStore: AuthStore) {}

    getToken(login: string, password: string): Observable<any> {
        const params = new HttpParams()
            .set('name', login)
            .set('password', password);
        return this.http.get('http://coretest.herokuapp.com/users/login/', {params: params})
            .pipe(
                catchError(this.handleError)
            );
    }

    getUserInfo(): Observable<any> {
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        return this.http.get('http://coretest.herokuapp.com/users/my/', {headers: header})
            .pipe(
                catchError(this.handleError)
            );
    }

    getUsers(name: string): Observable<any> {
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        const params = new HttpParams().set('name', name);
        return this.http.get('http://coretest.herokuapp.com/users/', {headers: header, params: params})
            .pipe(
                catchError(this.handleError)
            );
    }

    register(login: string, password: string, isAdmin: boolean): Observable<any> {
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        return this.http.post('http://coretest.herokuapp.com/users/',
            {name: login, password: password, is_admin: isAdmin || false}, {headers: header})
            .pipe(
                catchError(this.handleError)
            );
    }

    changeUserInfo(id: number, login: string, password: string, isAdmin: boolean): Observable<any> {
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        return this.http.patch('http://coretest.herokuapp.com/users/' + id + '/',
            {name: login, password: password, is_admin: isAdmin || false}, {headers: header})
            .pipe(
                catchError(this.handleError)
            );
    }

    getProperties(properties): Observable<any> {
        let params = new HttpParams();
        properties.forEach(property => {
            params = params.set(property['name'], property['value']['name']);
        });
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        return this.http.get('http://coretest.herokuapp.com/api/fields/', {params: params, headers: header}).pipe(
            catchError(this.handleError)
        );
    }

    sendImage(image: File, image_name: string, type: 'sun' | 'ultraviolet'): Observable<any> {
        const header = new HttpHeaders().set('Authorization', this.authStore.getValue().token);
        const params = new HttpParams()
            .set('type', type)
            .set('photo_name', image_name);
        return this.http.post('http://coretest.herokuapp.com/api/report/', image, {params: params, headers: header})
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
        return throwError(error);
    }
}
