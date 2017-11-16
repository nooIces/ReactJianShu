import { ADD_BOOK, DELETE_BOOK, READSTATUS } from '../actions/Book';


const bookList = (state = [], action) => {
	let type = action.type;

	switch(type){
		case ADD_BOOK:
			return [{
				bookName: action.bookName,
				category: action.category,
				score: 0,
				userName: action.userName,
				readStatus: READSTATUS.UNREAD,
				createTime: new Date().toLocaleDateString(),
				more: {}
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
