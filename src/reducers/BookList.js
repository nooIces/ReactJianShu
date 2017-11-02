import { ADD_BOOK, DELETE_BOOK } from '../actions/index.js';

const bookList = (state = [], action) => {
	let type = action.type;

	switch(type){
		case ADD_BOOK:
			return [{
				booklist: action.text,
				own: action.haveyet
			}, ...state];
		case DELETE_BOOK:
			return state.filter((value, index) => {
				if(index === action.index){
					return false;
				}
				return true;
			});
		default: return state;
	}
}

export default bookList;