'use client';
import { combineSlices } from '@reduxjs/toolkit';
import { djangoApi } from './rtk-query/django-api-query';
import authSlice from './auth/slices/auth-slice';
// import count from './counter/slices/counter-slice';
export const rootReducer = combineSlices({
    //*Normal state reducers
    auth: authSlice,

    //* rtk-query api slices
    [djangoApi.reducerPath]: djangoApi.reducer,
});
