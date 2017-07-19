import { LOGIN_USER, SIGNUP_USER } from '../actions/index';
import store from '../store.js';

let user = {
  email: '',
  password: '',
};

const userReducer = (state = user, action) => {
  if (action.type === LOGIN_USER) {
    const { email, password } = action;
    user = {
      email,
      password,
    };
    return user;
  } else if (action.type === SIGNUP_USER) {
    const { email, password } = action;
    user = {
      email,
      password,
    };
    return user;
  }
  return state;
};

export default userReducer;
