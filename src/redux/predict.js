import * as ActionTypes from './actionTypes'

export const Predict = (state = {
    isLoading: true,
    errMess: null,
    predict: []
},action) => {
    switch (action.type) {
        case ActionTypes.PREDICT_SUCCESS:
            return {...state, isLoading: false, errMess: null, predict: action.payload};

        case ActionTypes.PREDICT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, predict: []};

        case ActionTypes.PREDICT_LOADING:
            return {...state, isLoading: true, errMess: null, predict: []};
        
        default:
            return state;
    }
}