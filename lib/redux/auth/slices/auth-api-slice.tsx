'use client';
import { djangoApi } from '../../rtk-query/django-api-query';

export const authApiSlice = djangoApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/user/login',
                method: 'POST',
                body: { ...credentials },
            }),
        }),
        signup: builder.mutation({
            query: (credentials) => ({
                url: `/user/create`,
                method: 'POST',
                body: { ...credentials },
            }),
        }),
    }),
});

export const { useLoginMutation, useSignupMutation } = authApiSlice;
