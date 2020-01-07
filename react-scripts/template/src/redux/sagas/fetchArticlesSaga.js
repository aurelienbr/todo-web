// @flow

import { takeLatest, put, call, all } from 'redux-saga/effects';
import { FETCH_ARTICLES_START, fetchArticlesSuccess, fetchArticlesFailure } from '~actions/fetchArticlesActions';
import * as articleService from '~services/article/articleService';
import type { Saga } from 'redux-saga';
import type { GeneratorType } from '~sagas/root';
import type { FETCH_ARTICLES_START_ACTION } from '~types/actions/fetchArticlesActions';
import { resetLogin } from '~actions/loginActions';
import { push } from 'connected-react-router';

export default function* registerSaga(): GeneratorType {
  yield takeLatest(FETCH_ARTICLES_START, fetchArticles);
}

function* fetchArticles(action: FETCH_ARTICLES_START_ACTION): Saga<void> {
  try {
    console.log('fetch articles');
    const articles = yield call(articleService.fetchArticles);
    console.log('fetched articles : ', articles);
    yield put(fetchArticlesSuccess(articles));
  } catch (e) {
    console.log('articles erreur : ', e);
    if (e.code === 401) yield all([put(resetLogin()), put(push('/'))]);
    yield put(fetchArticlesFailure(e.message));
  }
}
