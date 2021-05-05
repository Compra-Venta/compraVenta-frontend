import * as ActionTypes from './actionTypes'

export const Profile = (state = {
    isLoading: true,
    errMess: null,
    profile: {}
},action) => {
    switch (action.type) {
        case ActionTypes.PROFILE_SUCCESS:
            //console.log('Profile Success')
            return {...state, isLoading: false, errMess: null, profile: action.payload};

        case ActionTypes.PROFILE_FAILED:
            //console.log('Profile Failed')
            return {...state, isLoading: false, errMess: action.payload, profile: {}};

        case ActionTypes.PROFILE_LOADING:
            //console.log('Profile Loading')
            return {...state, isLoading: true, errMess: null, profile: {}};
        
        default:
            return state;
    }
}