import { connect } from 'react-redux';
import BookLibrary from '../components/BookLibrary.jsx';
import Navigation from '../components/navigations.jsx';
import { addbook, deletebook, changestatus, changecategory } from '../actions/index';
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
		addBook: ({booklist, own}) => {
			dispatch(addbook(booklist, own));
		},
		changeStatus: (status) => {
			dispatch(changestatus('changeStatus', status));
		},
		changeCategory: (category) => {
			dispatch(changecategory('changeCategory', category));
		},
		signInOrOut: (type, { username }) => {
			dispatch(loginInfomation(type, username));
		}
	}
}
let AllBook = connect(
	mapStatesToProps,
	mapDispatchToProps
)(BookLibrary);

let Navigations = connect(
	mapStatesToProps,
	mapDispatchToProps
)(Navigation);

export {
	AllBook,
	Navigations
};
