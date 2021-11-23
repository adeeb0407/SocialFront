import {AUTH, LOGOUT} from '../constants/actionTypes'
const authreducer = (state = {authData : null}, action) => {
switch (action.type) {
    case AUTH:
        localStorage.setItem('profile', JSON.stringify(action?.data));
        return {...state, authData: action?.data };
    case LOGOUT:
        localStorage.removeItem('profile');
        return{...state, authData : null};
    default:
        return state;
    }
}

export {authreducer}