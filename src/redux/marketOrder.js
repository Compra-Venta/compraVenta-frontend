import * as ActionTypes from './actionTypes'

export const MarketOrder = (state = {
    isLoading: true,
    errMess: null,
    orderStatus: {}
},action) => {
    switch (action.type) {
        case ActionTypes.MARKET_ORDER_SUCCESS:
            //console.log('MarketOrder Success')
            return {...state, isLoading: false, errMess: null, orderStatus: action.payload};

        case ActionTypes.MARKET_ORDER_FAILED:
            //console.log('MarketOrder Failed',action.payload)
            return {...state, isLoading: false, errMess: action.payload, orderStatus: {}};

        case ActionTypes.MARKET_ORDER_LOADING:
            //console.log('MarketOrder Loading')
            return {...state, isLoading: true, errMess: null, orderStatus: {}};
        
        default:
            return state;
    }
}