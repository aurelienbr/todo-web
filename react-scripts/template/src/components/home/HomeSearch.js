// @flow

import _ from 'lodash';
import faker from 'faker';
import React, { PureComponent } from 'react';
import { Search } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}));

type Props = {};

type State = {
  isLoading: boolean,
  results: Array<any>,
  value: string,
};

class HomeSearch extends PureComponent<Props, State> {
  state: State = initialState;

  handleResultSelect = (e: any, { result }: any) => this.setState({ value: result.title });

  handleSearchChange = (e: any, { value }: any) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        style={{ marginLeft: 20 }}
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props}
        placeholder="RECHERCHER"
      />
    );
  }
}

export default HomeSearch;
