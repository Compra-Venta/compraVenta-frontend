import * as ActionTypes from './actionTypes'

export const OpenTransaction = (state = {
    isLoading: true,
    errMess: null,
    openTransaction_info: []
},action) => {
    switch (action.type) {
        case ActionTypes.OPEN_TRANSACTION_SUCCESS:
            //console.log('Open Transaction Success')
            return {...state, isLoading: false, errMess: null, openTransaction_info: action.payload};

        case ActionTypes.OPEN_TRANSACTION_FAILED:
            //console.log('Open Transaction Failed')
            return {...state, isLoading: false, errMess: action.payload, openTransaction_info: []};

        case ActionTypes.OPEN_TRANSACTION_LOADING:
            //console.log('Open Transaction Loading')
            return {...state, isLoading: true, errMess: null, openTransaction_info: []};
        
        default:
            return state;
    }
}