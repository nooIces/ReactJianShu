import React from 'react';
import BookForShow from './BookForShow.jsx';
import { No } from '../actions/index';

class NotOwnBook extends React.Component{
	render(){
		const {dispatch, booklist, own} = this.props;
		return (
			<div>
			{
				this.props.booklist.map((value, index) => {
					if(value.own === No){
						return <BookForShow key = {index} name = { value.booklist }/>;
					}
				})
			}
			</div>
		);
	}
}

export default NotOwnBook;