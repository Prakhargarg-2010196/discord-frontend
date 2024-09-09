'use client';
import { tokenService } from '~/lib/utils/token-util';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';

// Type of auth state
interface AuthState {
    // user: object | null;
    accessToken: string | null;
}

// Initial auth state using that type
const initialState: AuthState = {
    // user: tokenService.decodeAccessToken(),
    accessToken: tokenService.getAccessToken(),
};
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        //*This functions takes the credentials like user value and accessToken
        setCredentials: (
            state: AuthState,
            {
                payload: { accessToken },
            }: PayloadAction<{
                accessToken: string | null;
            }>
        ) => {
            // state.user = user;
            state.accessToken = accessToken;
        },
        logout: (state: AuthState) => {
            // state.user = null;
            state.accessToken = null;
            /**
             * To remove token from local storage after logout, this would be done over a click of
             * button in settings menu
             */
            tokenService.deleteAccessToken();
        },
    },
});

// export all the actions with const exports.
//TODO: Learn more about modular javascript specially difference Default export and normal export
export const { setCredentials } = authSlice.actions;
export default authSlice.reducer; // Default export the entire reducer to be put in store
// export const selectCurrentUser = (state: RootState) => state.auth.user;
