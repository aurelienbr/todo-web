import { takeLatest, put, call, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { FETCH_ARTICLES_START, fetchArticlesSuccess, fetchArticlesFailure /*, FETCH_ARTICLES_START_ACTION */ } from '~actions/fetchArticlesActions';
import * as articleService from '~services/article/articleService';
import { resetLogin } from '~actions/loginActions';

export default function * registerSaga () {
  yield takeLatest(FETCH_ARTICLES_START, fetchArticles);
}

function * fetchArticles (/* action: FETCH_ARTICLES_START_ACTION */) {
  try {
    const articles = yield call(articleService.fetchArticles);
    yield put(fetchArticlesSuccess(articles));
  } catch (e) {
    if (e.code === 401) yield all([put(resetLogin()), put(push('/'))]);
    yield put(fetchArticlesFailure(e.message));
  }
}
