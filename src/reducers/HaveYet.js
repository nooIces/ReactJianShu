import { All, Yes, No } from '../actions/index.js';



const HaveYet = (state = All, action) => {
	let type = action.type;
	switch(type){
		case 'changeStatus':
			return action.status;
		default:
			return state; 
	}
}

export default HaveYet;