// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ArticleScreen from '~screens/ArticleScreen';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~screens/ArticleScreen';

import { resetLogin } from '~actions/loginActions';
import { fetchArticles } from '~actions/fetchArticlesActions';

export default withRouter(
  connect(
    (state: StateType): StateProps => ({
      articles: state.fetchArticles.articles,
      status: state.fetchArticles.status,
      error: state.fetchArticles.error,
    }),
    (dispatch: DispatchType): DispatchProps => ({
      resetLogin: () => dispatch(resetLogin()),
      fetchArticles: () => dispatch(fetchArticles()),
    })
  )(ArticleScreen)
);
