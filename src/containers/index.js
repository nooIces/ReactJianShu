import { connect } from 'react-redux';
import BookLibrary from '../components/BookLibrary.jsx';
import OwnBook from '../components/OwnBook.jsx';
import NotOwnBook from '../components/NotOwnBook.jsx';
import { addbook, deletebook, changestatus, changecategory } from '../actions/index';

const mapStatesToProps = (state) => {
	return {
		booklist: state.bookList,
		status: state.status
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: ({booklist, own}) => {
			dispatch(addbook(booklist, own));
		},
		changeStatus: (status) => {
			dispatch(changestatus('changeStatus', status));
		},
		changeCategory: (category) => {
			dispatch(changecategory('changeCategory', category));
		}
	}
}
let AllBook = connect(
	mapStatesToProps,
	mapDispatchToProps
)(BookLibrary);

let HaveBook = connect(
	mapStatesToProps,
	mapDispatchToProps
)(OwnBook);

let HaveNotBook = connect(
	mapStatesToProps,
	mapDispatchToProps
)(NotOwnBook);

export {
	AllBook,
	HaveBook,
	HaveNotBook
};