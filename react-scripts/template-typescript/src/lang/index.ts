// import { addLocaleData } from 'react-intl';
// import localeEn from 'react-intl/locale-data/en';
import en from '~lang/en';
// import localeFr from 'react-intl/locale-data/fr';
import fr from '~lang/fr';
// addLocaleData([...localeEn, ...localeFr]);

const messages = {
  fr,
  en
};

export const languages = [
  {
    longname: 'Français',
    name: 'fr',
    flag: 'fr'
  },
  {
    longname: 'English',
    name: 'en',
    flag: 'gb'
  }
];

export default messages;
