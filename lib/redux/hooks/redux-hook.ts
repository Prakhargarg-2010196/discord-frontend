import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from '../store';

/** 
 * useAppDispatch is the typed useDispatch hook with the current AppDispatch for the store
 * useAppSelector is the typed useSelector hook for the store.
 * */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
