/* jshint esversion: 6 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
