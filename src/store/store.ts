import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { apiReducer } from "./api/apiReducer";

export const store = configureStore({
  reducer: apiReducer.reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const loadStatus = (state: RootState): boolean => state.isLoading;
export const loadCompleteStatus = (state: RootState): boolean => state.loadComplete;
export const baseReq = (state: RootState): unknown => state.req;
export const detailReq = (state: RootState): unknown => state.detailReq;
