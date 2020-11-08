import {createSelector} from '@ngrx/store';
import {State} from "../state";

export const getAuth = (state: State) => state.auth;

export const selectAuth = createSelector(
    getAuth,
    auth => auth
);
