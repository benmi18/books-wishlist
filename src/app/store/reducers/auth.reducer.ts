import { Action, createReducer, on } from '@ngrx/store';
import {authInitialState, AuthState} from "../state/auth.state";
import {login, logout} from "../actions/auth.actions";


export const authReducer = createReducer(
  authInitialState,
    on(login, (state, {email}) => ({...state, isLoggedIn: true, email})),
    on(logout, (state) => ({...state, isLoggedIn: false, email: ''})),
);

export function reducer(state: AuthState | undefined, action: Action) {
    return authReducer(state, action);
}
