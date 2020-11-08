export interface AuthState {
    isLoggedIn: boolean;
    email: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    email: ''
}
