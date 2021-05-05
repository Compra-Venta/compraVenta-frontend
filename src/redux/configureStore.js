import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import { WatchList } from './watchlist';
import { composeWithDevTools } from "redux-devtools-extension";
import { Predict } from './predict'
import { NewPassword } from './forgetPassword';
import { ChangePassword } from './changePassword';
import { Profile } from './profile';
import { Wallet } from './Wallet';
import { OpenTransaction } from './openTransaction';
import { ClosedTransaction } from './closedTransaction';
import { MarketOrder } from './marketOrder';
import { StopOrder } from './stopOrder';
import { Register } from './register';
import { VerifyMail } from './verifyMail';




export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            watchlist : WatchList,
            auth: Auth,
            register: Register,
            prediction: Predict,
            newPassword_status: NewPassword,
            changePassword_status: ChangePassword,
            profile: Profile,
            wallet: Wallet,
            openTransaction_info: OpenTransaction,
            closedTransaction_info: ClosedTransaction,
            marketOrder: MarketOrder,
            stopOrder: StopOrder,
            verifyMailStatus: VerifyMail,
        }),
        composeWithDevTools( applyMiddleware(thunk))
    );

    return store;
}