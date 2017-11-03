import { All } from '../actions/index.js';

const Category = (state = All, action) => {
	let type = action.type;
	switch(type){
		case 'changeCategory':
			return action.category;
		default:
			return state;
	}
}

export default Category;