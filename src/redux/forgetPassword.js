import * as ActionTypes from './actionTypes'

export const NewPassword = (state = {
    isLoading: true,
    errMess: null,
    new_Passwordstatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.PREDICT_SUCCESS:
            return {...state, isLoading: false, errMess: null, new_Passwordstatus: action.payload};

        case ActionTypes.PREDICT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, new_Passwordstatus: {}};

        case ActionTypes.PREDICT_LOADING:
            return {...state, isLoading: true, errMess: null, new_Passwordstatus: {}};
        
        default:
            return state;
    }
}