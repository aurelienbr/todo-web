// @flow
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export type StateProps = {
  language: string,
  style?: Object,
};

export type DispatchProps = {
  setLanguage: (language: string) => void,
};

type Props = {} & StateProps & DispatchProps;

const LanguagePicker = (props: Props) => {
  const { setLanguage, language, style, ...others } = props;
  return (
    <Dropdown
      style={{ height: 40, ...style }}
      onChange={(e: any, { value }: Object) => setLanguage(value)}
      value={language}
      selection
      options={[{ key: 'fr', value: 'fr', text: 'fr' }, { key: 'en', value: 'en', text: 'en' }]}
      {...others}
    />
  );
};

export default LanguagePicker;
