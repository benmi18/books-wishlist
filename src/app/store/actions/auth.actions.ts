import { createAction, props } from '@ngrx/store';

export enum AuthActionsType {
    login= '[Auth] Login',
    logout= '[Auth] Logout',
}

export const login = createAction(
    AuthActionsType.login,
    props<{email: string}>()
);
export const logout = createAction(
    AuthActionsType.logout,
);




