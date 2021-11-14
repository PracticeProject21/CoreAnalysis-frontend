import { Injectable } from '@angular/core';
import { persistState, Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
    token: string;
    isLogged: boolean;
    isAdmin: boolean;
    username: string;
    report?: any,
}

export function createInitialState(): AuthState {
    return {
        token: '',
        isLogged: false,
        isAdmin: false,
        username: '',
    };
}

const authStoreKey = 'auth-store';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: authStoreKey })
export class AuthStore extends Store<AuthState> {
    constructor() {
        super(createInitialState());
    }
}

export const persistStorage = persistState({include: [authStoreKey]});
