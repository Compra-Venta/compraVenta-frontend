import * as ActionTypes from './actionTypes'

export const StopOrder = (state = {
    isLoading: true,
    errMess: null,
    orderStatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.STOP_ORDER_SUCCESS:
            //console.log('StopOrder Success')
            return {...state, isLoading: false, errMess: null, orderStatus: action.payload};

        case ActionTypes.STOP_ORDER_FAILED:
            //console.log('StopOrder Failed')
            return {...state, isLoading: false, errMess: action.payload, orderStatus: {}};

        case ActionTypes.STOP_ORDER_LOADING:
            //console.log('StopOrder Loading')
            return {...state, isLoading: true, errMess: null, orderStatus: {}};
        
        default:
            return state;
    }
}