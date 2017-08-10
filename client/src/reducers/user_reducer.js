import { FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/const'

const userstate = { user: null };
export default (state = userstate, action) => {
    if(action.type === FETCH_USER_SUCCESS) {
        const { user } = action;
        const newState = Object.assign({}, state, { user });
        return newState;
    } else if (action.type === FETCH_USER_ERROR) {
        const { fetchError } = action;
        const newState = Object.assign({}, state, { fetchError });
        return newState;
    }
    return state;
}