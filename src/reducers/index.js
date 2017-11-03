import bookList from './BookList';
import HaveYet from './HaveYet';
import Category from './Category';
import information from './Information';
import { combineReducers } from 'redux';

let Book = combineReducers({
	bookList,
	status: HaveYet,
	category: Category,
	information
});

export default Book;
