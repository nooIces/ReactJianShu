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
import BookLibrary from './components/BookLibrary.jsx';
import { Provider } from 'react-redux';
import { AllBook, Navigations } from './containers/index';
import { Yes, No } from './actions/index';
import WrappedNewBook from './components/NewForm.jsx';
import './style/main.less';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const store = createStore(Book, {
    bookList: [ { 'booklist':'test1', 'own':Yes }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No },
    { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No },
    { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No },
    { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }, { 'booklist':'test2', 'own':No }]
});

ReactDOM.render(
  <Provider store = {store} >
    <Router>
        <div className = "layout">
            <Navigations />
            <Route exact path="\/" component={AllBook}/>
            <Route path="\/Book" component={AllBook}/>
        </div>
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
