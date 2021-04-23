import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';
import { composeWithDevTools } from "redux-devtools-extension";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchlist : WatchList,
            auth: Auth,
        }),
        composeWithDevTools( applyMiddleware(thunk))
    );

    return store;
}