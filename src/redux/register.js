import * as ActionTypes from './actionTypes'

export const Register = (state = {
    isLoading: true,
    isLogging:false,
    isSigning:true,
    errMess: null,
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_REQUEST:
            return { ...state, isLoading: false, errMess: null, user: action.creds };

        case ActionTypes.REGISTER_FAILED:
            return { ...state, isLoading: false, errMess: action.message};

        case ActionTypes.REGISTER_SUCCESS:
            return { ...state, isLoading: true, errMess: [],isLogging:true,isSigning:false};


        default:
            return state;
    }
}