import * as ActionTypes from './actionTypes'

export const VerifyMail = (state = {
    isLoading: true,
    errMess: null,
    verifyStatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.VERIFY_MAIL_SUCCESS:
            return {...state, isLoading: false, errMess: null, verifyStatus: action.payload};

        case ActionTypes.VERIFY_MAIL_FAILURE:
            return {...state, isLoading: false, errMess: action.payload, verifyStatus: {}};

        case ActionTypes.VERIFY_MAIL_LOADING:
            return {...state, isLoading: true, errMess: null, verifyStatus: {}};
        
        default:
            return state;
    }
}