const ADD_BOOK = 'ADD';
const DELETE_BOOK = 'DELETE';

const ALL = 'all';
const UNREAD = 'unread';
const PROCESSING = 'processing';
const READ = 'read';
const READSTATUS = {
	ALL,
	UNREAD,
	PROCESSING,
	READ
}
const READSTATUS_CN = {
	all: "所有",
	unread: "未读",
	processing: "进行中",
	read: "已读"
}
const TECHNIQUE = "technique";
const NOVEL = "novel";
const BOOKCATEGORY = {
    TECHNIQUE,
    NOVEL
}
const BOOKCATEGORY_CN = {
    technique: "技术",
    novel: "小说"
}

const addbook = (bookName, category, userName) => ({
	type: ADD_BOOK,
	bookName,
	category,
    userName
});

const deletebook = (index) => ({
	type: DELETE_BOOK,
	index
});

export {
	ADD_BOOK,
	DELETE_BOOK,
	addbook,
	deletebook,
	READSTATUS,
	READSTATUS_CN,
    BOOKCATEGORY,
	BOOKCATEGORY_CN
}
