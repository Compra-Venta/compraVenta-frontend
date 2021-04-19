import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchList : WatchList,
            auth: Auth,
        }),
        applyMiddleware(thunk)
    );

    return store;
}