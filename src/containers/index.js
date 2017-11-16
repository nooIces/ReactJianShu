import { connect } from 'react-redux';
import BookTable from '../components/book/BookTable.jsx';
import MainMenu from '../components/navigation/MainMenu.jsx';
import { addbook, deletebook } from '../actions/Book';
import { loginInfomation } from '../actions/Login';

const mapStatesToProps = (state) => {
	return {
		booklist: state.bookList,
		status: state.status,
		information: state.information
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: ({bookName, category}, userName) => {
			dispatch(addbook(bookName, category, userName));
		},
		deleteBook: (index) => {
			dispatch(deletebook(index));
		},
		signInOrOut: (type, { username }) => {
			dispatch(loginInfomation(type, username));
		}
	}
}
let WrapBookTable = connect(
	mapStatesToProps,
	mapDispatchToProps
)(BookTable);

let MainMenus = connect(
	mapStatesToProps,
	mapDispatchToProps
)(MainMenu);

export {
	WrapBookTable,
	MainMenus
};
