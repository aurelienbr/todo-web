import React from 'react';
import ReactDOM from 'react-dom';

import '~styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import AppProvider from '~components/app/AppProvider';

ReactDOM.render(<AppProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
