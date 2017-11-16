import bookList from './BookList';
import information from './Information';
import { combineReducers } from 'redux';

let Book = combineReducers({
	bookList,
	information
});

export default Book;
