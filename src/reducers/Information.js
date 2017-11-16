import { SignIn, SignOut } from '../actions/Login';

const NotLogin = {
    username: null
};
const information = (state = NotLogin, action) => {
	let type = action.type;
    let username = action.username;
	switch(type){
		case SignIn:
			return {
                username
            };
		case SignOut:
			return NotLogin;
		default: return state;
	}
}

export default information;
