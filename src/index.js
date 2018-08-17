import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { hot } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const Container = hot(module)(() => <App />);

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();
