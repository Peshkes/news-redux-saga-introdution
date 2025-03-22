import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AllNewsActionAttribute, HNStory, NewsStore} from "../types.ts";

const newsInitialState: NewsStore = {
    latestNews: [],
    popularNews: [],
    latestLoading: false,
    popularLoading: false,
    latestError: null,
    popularError: null,
}

export const newsSlice = createSlice({
    name: 'NEWS',
    initialState: newsInitialState,
    reducers: {
        fetchLatestNewsAction: (state) => {
            state.latestLoading = true;
            state.latestError = null;
        },
        fetchLatestNewsSuccessAction: (state, {payload}: PayloadAction<Array<HNStory>>) => {
            state.latestNews = payload;
            state.latestLoading = false;
        },
        fetchLatestNewsErrorAction: (state, {payload}: PayloadAction<string>) => {
            state.latestError = payload;
            state.latestLoading = false;
        },

        fetchPopularNewsAction: (state) => {
            state.popularLoading = true;
            state.popularError = null;
        },
        fetchPopularNewsSuccessAction: (state, {payload}: PayloadAction<Array<HNStory>>) => {
            state.popularNews = payload;
            state.popularLoading = false;
        },
        fetchPopularNewsErrorAction: (state, {payload}: PayloadAction<string>) => {
            state.popularError = payload;
            state.popularLoading = false;
        },

        fetchAllNewsAction: (state) => {
            state.latestLoading = true;
            state.popularLoading = true;
            state.latestError = null;
            state.popularError = null;
        },
        fetchAllNewsSuccessAction: (state, {payload}: PayloadAction<AllNewsActionAttribute>) => {
            state.latestNews = payload.latestNews;
            state.popularNews = payload.popularNews;
        },
        fetchAllNewsErrorAction: (state, {payload}: PayloadAction<string>) => {
            state.latestError = payload;
            state.popularError = payload;
        }

    }
});

export const {
    fetchLatestNewsAction,
    fetchLatestNewsSuccessAction,
    fetchLatestNewsErrorAction,

    fetchPopularNewsAction,
    fetchPopularNewsSuccessAction,
    fetchPopularNewsErrorAction,

    fetchAllNewsAction,
    fetchAllNewsSuccessAction,
    fetchAllNewsErrorAction
} = newsSlice.actions;

export default newsSlice.reducer;
