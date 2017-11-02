import React from 'react';
import BookForShow from './BookForShow.jsx';
import { Yes } from '../actions/index';

class OwnBook extends React.Component{
	render(){
		const {dispatch, booklist} = this.props;
		return (
			<div>
			{
				this.props.booklist.map((value, index) => {
					if(value.own === Yes){
						return <BookForShow key = {index} name = { value.booklist }/>;
					}
				})
			}
			</div>
		);
	}
}

export default OwnBook;