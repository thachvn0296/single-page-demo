import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/Counter.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from 'react-router-dom';


ReactDOM.render(<HashRouter>
      <App/>
</HashRouter>, document.getElementById('root'));
