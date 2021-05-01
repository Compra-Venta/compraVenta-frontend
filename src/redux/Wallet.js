import * as ActionTypes from './actionTypes'

export const Wallet = (state = {
    isLoading: true,
    errMess: null,
    wallet: {}
},action) => {
    switch (action.type) {
        case ActionTypes.WALLET_SUCCESS:
            //console.log('Wallet Success')
            return {...state, isLoading: false, errMess: null, wallet: action.payload};

        case ActionTypes.WALLET_FAILED:
            //console.log('Wallet Failed')
            return {...state, isLoading: false, errMess: action.payload, wallet: {}};

        case ActionTypes.WALLET_LOADING:
            //console.log('Wallet Loading')
            return {...state, isLoading: true, errMess: null, wallet: {}};
        
        default:
            return state;
    }
}