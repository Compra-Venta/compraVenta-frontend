import * as ActionTypes from './actionTypes'

export const WatchList = (state = {
    isLoading: true,
    errMess: null,
    watchlist: []
}, action) => {
    switch (action.type) {
        case ActionTypes.WATCHLIST_SUCCESS:
            return { ...state, isLoading: false, errMess: null, watchlist: action.payload };

        case ActionTypes.WATCHLIST_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, watchlist: [] };

        case ActionTypes.WATCHLIST_LOADING:
            return { ...state, isLoading: true, errMess: [], watchlist: [] };
        case ActionTypes.ADD_SYMBOL:
            var symbol= action.payload;
            return {...state, watchlist: state.watchlist.concat(symbol) }

        default:
            return state;
    }
}