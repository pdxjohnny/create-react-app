import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/index';
import registerServiceWorker from './registerServiceWorker';
// import openpgp from 'openpgp';

// openpgp.initWorker({ path:'openpgp.worker.js' });
ReactDOM.render(<Index />, document.querySelector('#root'));
registerServiceWorker();
