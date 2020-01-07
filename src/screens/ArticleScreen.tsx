import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { FaSignOutAlt, FaBars, FaEye, FaShare } from 'react-icons/fa';
import { Spinner, Card, CardBody, CardImg, Row, Col, CardSubtitle, CardTitle } from 'reactstrap';

import { StateType } from '~reducers/index';
import { resetLogin } from '~actions/loginActions';
import { fetchArticles } from '~actions/fetchArticlesActions';
import LanguagePicker from '~components/fragments/LanguagePicker';
import { ArticleType } from '~types/Article';
import { STATUS_LOADING, STATUS_SUCCESS, Status } from '~types/Status';
import { articlesFilteredSelector } from '~selectors/articlesSelectors';

type OwnProps = {};

type StateProps = {
  articles: Array<ArticleType>;
  status: Status;
  error: string;
};

type DispatchProps = {
  resetLogin: Function;
  fetchArticles: Function;
};

type Props = OwnProps & StateProps & DispatchProps;

class ArticleScreen extends PureComponent<Props> {
  props: Props;

  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
          <FaBars style={{ cursor: 'pointer', fontSize: '3rem' }} />
          <div>
            <LanguagePicker style={{ marginRight: 10 }} />
            <FaSignOutAlt style={{ cursor: 'pointer', fontSize: '3rem' }} onClick={this.handleSignOut} />
          </div>
        </div>
        <div>
          {this.props.status === STATUS_LOADING && <Spinner />}
          {this.props.status === STATUS_SUCCESS && <Row>{this.props.articles.map((article, index) => this._renderCard(index, article))}</Row>}
        </div>
      </div>
    );
  }

  _renderCard = (key: number, article: ArticleType) => {
    return (
      <Col xs="4" className="mb-4">
        <Card>
          <CardImg top width="100%" src={article.cover} alt="Card image cap" />
          <CardBody>
            <CardTitle>{article.title}</CardTitle>
            <CardSubtitle>{(article.date || new Date()).toString()}</CardSubtitle>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <div>
                <FaEye />
                284
              </div>
              <div>
                <FaShare />
                1608
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };

  handleSignOut = () => {
    this.props.resetLogin();
  };
}

export default withRouter(
  connect<StateProps, DispatchProps, OwnProps, StateType>(
    state => ({
      articles: articlesFilteredSelector(state),
      status: state.fetchArticles.status,
      error: state.fetchArticles.error
    }),
    {
      resetLogin,
      fetchArticles
    }
  )(ArticleScreen)
);
