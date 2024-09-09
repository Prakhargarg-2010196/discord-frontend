'use client';
import {
    createApi,
    fetchBaseQuery,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
// import { tokenReceived, loggedOut } from './authSlice';
import { Mutex } from 'async-mutex';
import { RootState } from '../store';
import { setCredentials } from '../auth/slices/auth-slice';

console.log(process.env.NEXT_PUBLIC_DJANGO_API_URL);
//Base Query Definition
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_DJANGO_API_URL,
    prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

// create a new mutex
const mutex = new Mutex();
/**
 * Modified Base Query for refresh token implementation and mutex lock for not calling refresh endpoint again if it is getting Unauthorized Status 401
 * TODO: Learn more about async-mutex and how it works
 * */
const baseQueryRefreshAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // checking whether the mutex is locked
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResponse = await baseQuery(
                    '/refreshToken',
                    api,
                    extraOptions
                );
                if (refreshResponse?.data) {
                    api.dispatch(
                        setCredentials({
                            accessToken:refreshResponse.data.token,
                        })
                    );
                    // retry the initial query
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    // api.dispatch(loggedOut());
                }
            } finally {
                // release must be called once the mutex should be released again.
                release();
            }
        } else {
            // wait until the mutex is available without locking it
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

// Define a api service using a base URL and expected endpoints
export const djangoApi = createApi({
    reducerPath: 'djangoApi',
    baseQuery: baseQueryRefreshAuth,
    endpoints: () => ({}),
});

//* Export hooks here which are auto-generated with the name of the function
export const {} = djangoApi;
