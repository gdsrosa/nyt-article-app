import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import api from "../../api";
import { AppDispatch } from "../types";
import { AxiosError, AxiosResponse } from "axios";

export interface ArticleState {
  articles: any[];
  isLoading: boolean;
  error: AxiosResponse | undefined;
  currentPage: number;
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: undefined,
  currentPage: 0,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    fetchArticles: (state: ArticleState, action: PayloadAction) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchArticlesSuccess: (
      state: ArticleState,
      action: PayloadAction<{ articles: any[]; page: number }>
    ) => {
      return {
        ...state,
        isLoading: false,
        articles: action.payload.articles,
        currentPage: action.payload.page,
      };
    },
    fetchArticlesFailure: (
      state: ArticleState,
      { payload }: PayloadAction<{ data: AxiosResponse | undefined }>
    ) => {
      return {
        ...state,
        isLoading: false,
        error: payload.data,
      };
    },
  },
});

export const { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } =
  articleSlice.actions;

export const handleFetchArticles =
  (page: number, query: string) => async (dispatch: AppDispatch) => {
    dispatch(fetchArticles());

    try {
      const { data } = await api.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );

      dispatch(fetchArticlesSuccess({ articles: data?.response?.docs, page }));
    } catch (error) {
      dispatch(
        fetchArticlesFailure({
          data: (error as AxiosError)?.response,
        })
      );
    }
  };

export default articleSlice.reducer;
