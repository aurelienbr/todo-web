'use strict';
// Template

const scriptsBase = {
  flow: 'flow',
  eslint: 'eslint src/**/*.js',
  'eslint:fix': 'eslint src/**/*.js --fix',
};

const scriptsTypescript = {
  tsc: 'tsc',
  'tsc:watch': 'tsc --watch',
  eslint: 'eslint src/ --ext .ts --ext .tsx',
  'eslint:fix': 'eslint src/ --ext .ts --ext .tsx --fix',
};

const scripts = {
  dev: 'react-scripts dev',
  start: 'serve -s build',
  build: 'cross-env GENERATE_SOURCEMAP=false react-scripts build',
  'build:sourcemap': 'react-scripts build',
  eject: 'react-scripts eject',
  analyze: "source-map-explorer 'build/static/js/*.js'",
  'disabled-postbuild':
    'purgecss --css build/static/css/*.css --content build/static/index.html build/static/js/*.js --out build/static/css',
  'heroku-postbuild': 'npm run build',
  test:
    'react-scripts test --watchAll=false --collectCoverage=true --coverageReporters=html',
  'test:watch':
    'react-scripts test --collectCoverage=true --coverageReporters=text',
  'test:e2e':
    'jest -c integration/jest.config.js --collectCoverage=true --coverageReporters=html',
};

const requiredDependencies = [
  'redux@4.0.1',
  'redux-devtools-extension@2.13.8',
  'redux-persist@6.0.0',
  'redux-saga@1.1.1',
  'reselect@4.0.0',
  'react-loadable@5.5.0',
  'react-router-dom@5.1.2',
  'connected-react-router@6.5.2',
  'react-intl@3.3.0',
  'react-redux@7.1.1',
  'axios@0.19.0',
  'faker@4.1.0',
  'formik@2.0.6',
  'bootstrap@4.4.1',
  'react-icons@3.8.0',
  'reactstrap@8.2.0',
  'serve@11.1.0',
];

const requiredDevDependencies = [
  'serve@11.1.0',
  'source-map-explorer@2.0.1',
  'babel-eslint@10.0.3',
  'eslint@6.6.0',
  'eslint-config-prettier@6.5.0',
  'eslint-config-react-native@4.0.0',
  'eslint-config-semistandard@15.0.0',
  'eslint-config-standard@14.1.0',
  'eslint-plugin-import@2.18.2',
  'eslint-plugin-jest@22.17.0',
  'eslint-plugin-jsx-a11y@6.2.3',
  'eslint-plugin-node@10.0.0',
  'eslint-plugin-prettier@3.1.1',
  'eslint-plugin-promise@4.2.1',
  'eslint-plugin-react@7.14.3',
  'eslint-plugin-react-native@3.7.0',
  'eslint-plugin-standard@4.0.1',
  'prettier-eslint@9.0.1',
  'cross-env@6.0.0',
  'puppeteer@2.0.0',
  'jest-puppeteer@4.3.0',
  'prettier@1.19.1',
  'lint-staged@9.5.0',
  'husky@3.1.0',
  'enzyme@3.10.0',
  'enzyme-adapter-react-16@1.15.1',
  'jest-enzyme@7.1.2',
  '@fullhuman/postcss-purgecss@1.3.0',
];

const requiredDevDependenciesBase = [
  'flow-bin@0.108.0',
  'eslint-plugin-flowtype@4.3.0',
];

const requiredDevDependenciesTypescript = [
  '@typescript-eslint/eslint-plugin@2.7.0',
  '@types/expect-puppeteer@3.3.3',
  '@types/jest-environment-puppeteer@4.3.1',
  '@types/puppeteer@2.0.0',
  '@types/react@^16.9.13',
  '@types/react-dom@16.9.4',
  '@types/react-loadable@5.5.2',
  '@types/react-redux@7.1.5',
  '@types/react-router@5.1.3',
  '@types/react-router-dom@5.1.3',
  '@types/faker@4.1.7',
  '@types/lodash@4.14.149',
  '@types/jest@24.0.23',
  '@types/node@12.12.14',
  'typescript@3.6.4',
  'ts-jest@24.2.0',
  '@types/reactstrap@8.2.0',
  '@types/enzyme-adapter-react-16@1.0.5',
  '@types/enzyme@3.10.4',
];

const templateItems = [
  'integration',
  '.eslintrc.js',
  '.prettierrc',
  'jest-puppeteer.config.js',
];

const jest = {
  moduleNameMapper: {
    '~types/(.*)': '<rootDir>/src/types/$1',
    '~fonts/(.*)': '<rootDir>/src/assets/fonts/$1',
    '~images/(.*)': '<rootDir>/src/assets/images/$1',
    '~styles/(.*)': '<rootDir>/src/assets/styles/$1',
    '~components/(.*)': '<rootDir>/src/components/$1',
    '~constants/(.*)': '<rootDir>/src/constants/$1',
    '~lang/(.*)': '<rootDir>/src/lang/$1',
    '~navigation/(.*)': '<rootDir>/src/navigation/$1',
    '~actions/(.*)': '<rootDir>/src/redux/actions/$1',
    '~reducers/(.*)': '<rootDir>/src/redux/reducers/$1',
    '~sagas/(.*)': '<rootDir>/src/redux/sagas/$1',
    '~selectors/(.*)': '<rootDir>/src/redux/selectors/$1',
    '~screens/(.*)': '<rootDir>/src/screens/$1',
    '~services/(.*)': '<rootDir>/src/services/$1',
    '~utils/(.*)': '<rootDir>/src/utils/$1',
  },
};

module.exports = {
  scripts,
  scriptsBase,
  scriptsTypescript,
  requiredDevDependencies,
  requiredDevDependenciesBase,
  requiredDevDependenciesTypescript,
  requiredDependencies,
  templateItems,
  jest,
};
