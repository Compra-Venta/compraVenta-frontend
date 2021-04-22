import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';
import { Predict } from './predict'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchList : WatchList,
            auth: Auth,
            Predict: Predict,
        }),
        applyMiddleware(thunk)
    );

    return store;
}