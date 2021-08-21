import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/api";
import { PokemonBaseRequest, PokemonDetailProps } from "../../api/interfaces";

interface FetchData {
  offset: string;
  limit: string;
}

export const getDetailData = createAsyncThunk(
  "apiReducer/detailData",
  async (name: string) => {
    const res = await fetch(`${BASE_URL}/${name}`);
    const json = (await res.json()) as PokemonDetailProps;
    return json;
  }
);

export const getData = createAsyncThunk(
  "apiReducer/data",
  async ({ offset, limit }: FetchData) => {
    const res = await fetch(`${BASE_URL}/?offset=${offset}&limit=${limit}`);
    const json = (await res.json()) as PokemonBaseRequest;
    return json;
  }
);
