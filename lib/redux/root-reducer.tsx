import { combineSlices } from '@reduxjs/toolkit';
import count from './counter-slice-test/counter-slice-test';
export const rootReducer = combineSlices({ count });
export type RootState = ReturnType<typeof rootReducer>;

