import { Injectable } from '@angular/core';
import { persistState, Store, StoreConfig } from '@datorama/akita';

export interface AuthState {
    isLogged: boolean;
    isAdmin: boolean;
    username: string;
}

export function createInitialState(): AuthState {
    return {
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
