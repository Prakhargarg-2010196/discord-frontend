'use client';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

export const store = () =>
    configureStore({
        //Configure Store is a wrapper function
        reducer: rootReducer, // Setup Root reducer which combines all the slices
    });

/*
The following types are exported for ease of usage in the entire project
1. RootState is the type of the store
2. AppDispatch is the type for dispatch function for the store
*/

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
