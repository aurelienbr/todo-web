// @flow
import React, { PureComponent } from 'react';
import { Grid, Card, Image, Segment, Icon, Dropdown, Loader } from 'semantic-ui-react';
import LanguagePicker from '~containers/fragments/LanguagePickerContainer';

import type { ArticleType } from '~types/Article';
import { STATUS_LOADING, STATUS_SUCCESS, type Status } from '~types/Status';

export type StateProps = {
  articles: Array<ArticleType>,
  status: Status,
  error: string,
};

export type DispatchProps = {
  resetLogin: Function,
  fetchArticles: Function,
};

type Props = {} & StateProps & DispatchProps;

class ArticleScreen extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Segment style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Icon size="big" name="sidebar" />
          <div>
            <LanguagePicker style={{ marginRight: 10 }} />
            <Icon style={{ cursor: 'pointer' }} size="big" color="black" name="sign-out" onClick={this.handleSignOut} />
          </div>
        </Segment>
        <Segment>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Dropdown style={{ marginLeft: 20 }} text="PERFORMANCE">
              <Dropdown.Menu>
                <Dropdown.Item text="Croissant" />
                <Dropdown.Item text="Décroissant" />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginLeft: 20 }} text="VUES">
              <Dropdown.Menu>
                <Dropdown.Item text="Croissant" />
                <Dropdown.Item text="Décroissant" />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginLeft: 20 }} text="DATE">
              <Dropdown.Menu>
                <Dropdown.Item text="Croissant" />
                <Dropdown.Item text="Décroissant" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {this.props.status === STATUS_LOADING && <Loader inline />}
          {this.props.status === STATUS_SUCCESS && (
            <Grid style={{ marginTop: 20 }} doubling columns={5}>
              {this.props.articles.map(article => this._renderCard(article))}
            </Grid>
          )}
        </Segment>
      </div>
    );
  }

  _renderCard = (article: ArticleType) => {
    return (
      <Grid.Column>
        <Card fluid>
          <Image src={article.cover} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta>
              <span className="date">{(article.date || new Date()).toString()}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <div>
                <Icon size="big" name="eye" />
                284
              </div>
              <div>
                <Icon size="big" name="share" />
                1608
              </div>
            </div>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  };

  handleSignOut = () => {
    this.props.resetLogin();
  };
}

export default ArticleScreen;
