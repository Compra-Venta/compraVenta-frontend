import * as ActionTypes from './actionTypes'

export const ClosedTransaction = (state = {
    isLoading: true,
    errMess: null,
    closedTransaction_info: []
},action) => {
    switch (action.type) {
        case ActionTypes.CLOSED_TRANSACTION_SUCCESS:
            //console.log('Closed Transaction Success')
            return {...state, isLoading: false, errMess: null, closedTransaction_info: action.payload};

        case ActionTypes.CLOSED_TRANSACTION_FAILED:
            //console.log('Closed Transaction Failed')
            return {...state, isLoading: false, errMess: action.payload, closedTransaction_info: []};

        case ActionTypes.CLOSED_TRANSACTION_LOADING:
            //console.log('Closed Transaction Loading')
            return {...state, isLoading: true, errMess: null, closedTransaction_info: []};
        
        default:
            return state;
    }
}