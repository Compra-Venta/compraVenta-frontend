import * as ActionTypes from './actionTypes'

export const Register = (state = {
    isLoading: true,
    errMess: null,
    user: localStorage.getItem('rcreds') ? JSON.parse(localStorage.getItem('rcreds')) : null
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return { ...state, isLoading: false, errMess: null, user: action.creds };

        case ActionTypes.REGISTER_FAILED:
            return { ...state, isLoading: false, errMess: action.message};

        case ActionTypes.REGISTER_SUCCESS:
            return { ...state, isLoading: true, errMess: []};


        default:
            return state;
    }
}