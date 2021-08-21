import { createSlice } from "@reduxjs/toolkit";
import { PokemonAllData, PokemonBaseRequest } from "../../api/interfaces";
import { getData, getDetailData } from "./apiAsyncThunk";

interface ApiReducerState {
  req: PokemonBaseRequest | unknown;
  detailReq: PokemonAllData | unknown;
  isLoading: boolean;
  error: boolean | string;
}

const initialState: ApiReducerState = {
  req: {},
  detailReq: {},
  isLoading: false,
  error: false,
};

export const apiReducer = createSlice({
  name: "apiReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        return { ...state, ...{ isLoading: true } };
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        return { ...state, ...{ req: payload, isLoading: false } };
      })
      .addCase(getData.rejected, (state) => {
        return { ...state, ...{ isLoading: false, error: "error" } };
      })
      .addCase(getDetailData.pending, (state) => {
        return { ...state, ...{ isLoading: true } };
      })
      .addCase(getDetailData.fulfilled, (state, { payload }) => {
        return { ...state, ...{ detailReq: payload, isLoading: false } };
      })
      .addCase(getDetailData.rejected, (state) => {
        return { ...state, ...{ isLoading: false, error: "error" } };
      });
  },
});
