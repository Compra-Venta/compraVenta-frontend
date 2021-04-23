import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';
import { composeWithDevTools } from "redux-devtools-extension";
import { Predict } from './predict'
import { NewPassword } from './forgetPassword';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchlist : WatchList,
            auth: Auth,
            prediction: Predict,
            newPassword_status: NewPassword
        }),
        composeWithDevTools( applyMiddleware(thunk))
    );

    return store;
}