const ADD_BOOK = 'ADD';
const DELETE_BOOK = 'DELETE';

const All = 'All';
const Yes = 'Yes';
const No = 'No';
const HaveYet = {
	All,
	Yes,
	No
}

const addbook = (text, haveyet) => ({
	type: ADD_BOOK,
	text,
	haveyet
});

const deletebook = (index) => ({
	type: DELETE_BOOK,
	index
});

const got = (type, index) => ({
	type,
	index
});

const changestatus = (type, status) => ({
	type,
	status
});

const changecategory = (type, category) => ({
	type,
	category
});

export {
	ADD_BOOK,
	DELETE_BOOK,
	addbook,
	deletebook,
	changestatus,
	changecategory,
	got,
	HaveYet,
	All,
	Yes,
	No
}
