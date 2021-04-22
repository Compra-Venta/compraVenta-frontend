import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';
import { Predict } from './predict'
import { NewPassword } from './forgetPassword';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchList : WatchList,
            auth: Auth,
            prediction: Predict,
            newPassword_status: NewPassword
        }),
        applyMiddleware(thunk)
    );

    return store;
}