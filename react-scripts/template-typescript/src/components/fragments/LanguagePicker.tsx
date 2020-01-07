import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

import { languages } from '~lang/index';
import { setLanguage } from '~actions/localeActions';
import { StateType } from '~reducers/index';

type OwnProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
};

type StateProps = {
  language: string;
};

type DispatchProps = {
  setLanguage: (language: 'fr' | 'en') => void;
};

type Props = OwnProps & StateProps & DispatchProps;

const LanguagePicker = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const { setLanguage, language } = props;

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{language}</DropdownToggle>
      <DropdownMenu>
        {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          languages.map((lang: any) => (
          // eslint-disable-next-line react/jsx-no-bind
            <DropdownItem onClick={() => setLanguage(lang.name)} key={lang.name}>
              {lang.name}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
  /*
  return (
    <Dropdown
      style={{ height: 40, ...style }}
      // eslint-disable-next-line react/jsx-no-bind
      onChange={(e: any, { value }: any) => setLanguage(value)}
      value={language}
      selection
      options={[
        { key: 'fr', value: 'fr', text: 'fr' },
        { key: 'en', value: 'en', text: 'en' }
      ]}
      {...others}
    />
  );
  */
};

export default connect<StateProps, DispatchProps, OwnProps, StateType>(
  state => ({
    language: state.locale.language
  }),
  {
    setLanguage
  }
)(LanguagePicker);
