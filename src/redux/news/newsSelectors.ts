import {RootState} from "../store.ts";

export const latestNewsSelector = (state: RootState) => state.news.latestNews;
export const popularNewsSelector = (state: RootState) => state.news.popularNews;
export const latestLoadingSelector = (state: RootState) => state.news.latestLoading;
export const popularLoadingSelector = (state: RootState) => state.news.popularLoading;
export const latestErrorSelector = (state: RootState) => state.news.latestError;
export const popularErrorSelector = (state: RootState) => state.news.popularError;
