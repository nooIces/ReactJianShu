import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { createStore, compose } from 'redux';
import Book from './reducers/index';
import { Provider } from 'react-redux';
import { MainLayouts } from './containers/index';
import { Yes, No } from './actions/index';
import MainLayout from './components/Layout.jsx';
import PersonalCard from './components/navigation/PersonalCard.jsx';
import './style/main.less';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const store = createStore(Book);

ReactDOM.render(
  <Provider store = {store} >
    <Router>
        <MainLayout />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
