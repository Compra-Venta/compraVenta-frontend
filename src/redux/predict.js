import * as ActionTypes from './actionTypes'

export const Predict = (state = {
    isLoading: true,
    errMess: null,
    prediction: {}
},action) => {
    switch (action.type) {
        case ActionTypes.PREDICT_SUCCESS:
            return {...state, isLoading: false, errMess: null, prediction: action.payload};

        case ActionTypes.PREDICT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, prediction: {}};

        case ActionTypes.PREDICT_LOADING:
            return {...state, isLoading: true, errMess: null, prediction: {}};
        
        default:
            return state;
    }
}