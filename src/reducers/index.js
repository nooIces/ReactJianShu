import bookList from './BookList.js';
import HaveYet from './HaveYet.js';
import Category from './Category.jsx';
import { combineReducers } from 'redux';

let Book = combineReducers({
	bookList,
	status: HaveYet,
	category: Category
});

export default Book;