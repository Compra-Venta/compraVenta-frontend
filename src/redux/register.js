import * as ActionTypes from './actionTypes'

export const Register = (state = {
    isLoading: false,
    errMess: null,
    //user: localStorage.getItem('rcreds') ? JSON.parse(localStorage.getItem('rcreds')) : null,
    isRegistered:false
}, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_SUCCESS:
            //console.log('rc',action.creds)
            return { ...state, isLoading: false, errMess: null, /* user: action.creds, */isRegistered:true };

        case ActionTypes.REGISTER_FAILURE:
            return { ...state, isLoading: false, errMess: action.message,isRegistered:false};

        case ActionTypes.REGISTER_REQUEST:
            return { ...state, isLoading: true, errMess: [],isRegistered:false};


        default:
            return state;
    }
}