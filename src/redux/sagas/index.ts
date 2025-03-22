import {getLatestNews, getPopularNews} from "../../api";
import {call, fork, put, takeLatest, spawn} from 'redux-saga/effects';
// there are more effects
// delay, throttle, debounce, retry, take, takeEvery, takeLeading, apply, race, select, cancel
// join - wait result of not blocking action
import {
    fetchAllNewsAction,
    fetchLatestNewsErrorAction,
    fetchLatestNewsSuccessAction,
    fetchPopularNewsErrorAction,
    fetchPopularNewsSuccessAction
} from "../news/newsSilce.ts";

export function* handleFetchLatestNewsSaga () {
    try {
        const {hits} = yield call(getLatestNews, "react");
        yield put(fetchLatestNewsSuccessAction(hits));
    } catch (e: unknown) {
        yield put(fetchLatestNewsErrorAction((e as Error).message || 'Unknown error'));
    }
}

export function* handleFetchPopularNewsSaga () {
    try {
        const {hits} = yield call(getPopularNews);
        yield put(fetchPopularNewsSuccessAction(hits));
    } catch (e: unknown) {
        yield put(fetchPopularNewsErrorAction((e as Error).message || 'Unknown error'));
    }
}

// eslint-disable-next-line require-yield
export function* generateErrorSaga () {
    throw new Error();
}

export function* handleFetchAllNewsSaga () {
    yield fork(handleFetchLatestNewsSaga);
    yield fork(handleFetchPopularNewsSaga);
    yield spawn(generateErrorSaga); //spawn делает ошибку независимой

    // yield all([
    //     call(handleFetchLatestNewsSaga),
    //     call(handleFetchPopularNewsSaga)
    // ])
}

export function* watchPreloadNews () {
    yield takeLatest(fetchAllNewsAction, handleFetchAllNewsSaga);
}

// export function* watchPreloadNewsAtAnotherPlace () {
//     yield takeLatest(fetchAllNewsAction, handleFetchAllNewsSaga);
// }

export default function* rootSaga () {
    yield watchPreloadNews();

    // yield all([
    //     fork(watchPreloadNews),
    //     fork(watchPreloadNewsAtAnotherPlace)
    // ])
}

