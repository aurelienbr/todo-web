// @flow
import { connect } from 'react-redux';

import LanguagePicker from '~components/fragments/LanguagePicker';
import { setLanguage } from '~actions/localeActions';

import type { DispatchType, StateType } from '~types/Actions';
import type { StateProps, DispatchProps } from '~components/fragments/LanguagePicker';

export default connect(
  (state: StateType): StateProps => ({
    language: state.locale.language,
  }),
  (dispatch: DispatchType): DispatchProps => ({
    setLanguage: (language: string) => dispatch(setLanguage(language)),
  })
)(LanguagePicker);
