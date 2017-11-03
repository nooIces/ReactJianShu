import React from 'react';
import BookForShow from './BookForShow.jsx';
import { All, Yes, No } from '../actions/index';
import HeaderRoute from './HeaderRoute.jsx';
import Button from 'antd/lib/button';
import CollectionsPage from './NewForm.jsx';
import '../style/main.less';

class BookLibrary extends React.Component{
	constructor(props){
		super(props);
		this.addBooks = this.addBooks.bind(this);
	}
	addBooks(){
		this.props.history.replace('/addBook');
	}
	render(){
		const { booklist, status, changeStatus, addBook } = this.props;
		/*console.log(this.props.booklist.map(() => {
			return 3;
		}));*/
		return (
			<div className = "all">
				<div className = "main">
	                <HeaderRoute status = {All} nowStatus = {status} label = "AllBook" change = { changeStatus }/>
	                <HeaderRoute status = {Yes} nowStatus = {status} label = "Have" change = { changeStatus }/>
	                <HeaderRoute status = {No}  nowStatus = {status} label = "Have-Not" change = { changeStatus }/>
	                <div className = "ex"></div>
	                <CollectionsPage className = "plus" add = {addBook} />
	            </div>
	            <hr />
	            <div className = "main">
				{
					this.props.booklist.map((value, index) => {
						if(status === 'All' || value.own === status){
							return <BookForShow key = {index} name = { value.booklist } own = { value.own }/>;
						}
					})
				}
				</div>
			</div>
		);
	}
}

export default BookLibrary;
