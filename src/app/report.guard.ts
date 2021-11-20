import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth.query';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ReportGuard implements CanActivate {
    constructor(private authQuery: AuthQuery) {}

    canActivate(): Observable<boolean> | boolean{
        return this.authQuery.isLogged$;
    }
}
