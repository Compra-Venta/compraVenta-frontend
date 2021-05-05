import * as ActionTypes from './actionTypes'

export const NewPassword = (state = {
    isLoading: true,
    errMess: null,
    new_Passwordstatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.NEW_PASSWORD_SUCCESS:
            //console.log('Forget Password Success')
            return {...state, isLoading: false, errMess: null, new_Passwordstatus: action.payload};

        case ActionTypes.NEW_PASSWORD_FAILED:
            //console.log('Forget Password Failed')
            return {...state, isLoading: false, errMess: action.payload, new_Passwordstatus: {}};

        case ActionTypes.NEW_PASSWORD_LOADING:
            //console.log('Forget Password Loading')
            return {...state, isLoading: true, errMess: null, new_Passwordstatus: {}};
        
        default:
            return state;
    }
}