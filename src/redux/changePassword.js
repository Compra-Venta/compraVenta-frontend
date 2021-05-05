import * as ActionTypes from './actionTypes'

export const ChangePassword = (state = {
    isLoading: true,
    errMess: null,
    Change_Passwordstatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_PASSWORD_SUCCESS:
            //console.log('Change Password Success')
            return {...state, isLoading: false, errMess: null, Change_Passwordstatus: action.payload};

        case ActionTypes.CHANGE_PASSWORD_FAILED:
            //console.log('Change Password Failed')
            return {...state, isLoading: false, errMess: action.payload, Change_Passwordstatus: {}};

        case ActionTypes.CHANGE_PASSWORD_LOADING:
            //console.log('Change Password Loading')
            return {...state, isLoading: true, errMess: null, Change_Passwordstatus: {}};
        
        default:
            return state;
    }
}