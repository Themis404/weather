import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
// import MyText from './components/MyText'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
