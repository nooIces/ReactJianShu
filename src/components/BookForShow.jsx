import React from 'react';
import '../style/HeaderRoute.less';

class BookForShow extends React.Component{
	render(){
		return (
			<div className = "single">
				<img className = "image"/>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}

export default BookForShow;
