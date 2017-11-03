import { SignIn, SignOut } from '../actions/Login';

const NotLogin = {
    username: null,
    tag: ['se','tt','tt','tt','tt','tt']
};
const information = (state = NotLogin, action) => {
	let type = action.type;
    let username = action.username;
	switch(type){
		case SignIn:
			return {
                username,
                tag: ['test1', 'test2']
            };
		case SignOut:
			return NotLogin;
		default: return state;
	}
}

export default information;
