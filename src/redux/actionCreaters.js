import * as ActionTypes from './actionTypes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const baseUrl=process.env.REACT_APP_BASEURL

export const watchlistLoading = () => ({
    type: ActionTypes.WATCHLIST_LOADING
});

export const watchlistFailed = (errmess) => ({
    type: ActionTypes.WATCHLIST_FAILED,
    payload: errmess
});

export const watchlistSuccess = (watchlist) => {
    //console.log(watchlist.watchlist)
    return {
    type: ActionTypes.WATCHLIST_SUCCESS,
    payload: watchlist.watchlist
}};

export const addSymbol = (symbol) => ({
    type: ActionTypes.ADD_SYMBOL,
    payload: symbol
});

export const predictSuccess = (prediction) => ({
    type: ActionTypes.PREDICT_SUCCESS,
    payload: prediction
});

export const predictFailed = (errmess) => ({
    type: ActionTypes.PREDICT_FAILED,
    payload: errmess
});

export const predictLoading = () => ({
    type: ActionTypes.PREDICT_LOADING
});

export const newPasswordSuccess = (status) => ({
    type: ActionTypes.NEW_PASSWORD_SUCCESS,
    payload: status
}); 

export const newPasswordFailed = (errmess) => ({
    type: ActionTypes.NEW_PASSWORD_FAILED,
    payload: errmess
}); 

export const newPasswordLoading = () => ({
    type: ActionTypes.NEW_PASSWORD_LOADING
}); 

export const changePasswordSuccess = (status) => ({
    type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
    payload: status
}); 

export const changePasswordFailed = (errmess) => ({
    type: ActionTypes.CHANGE_PASSWORD_FAILED,
    payload: errmess
}); 

export const changePasswordLoading = () => ({
    type: ActionTypes.CHANGE_PASSWORD_LOADING
}); 

export const profileSuccess = (profile) => ({
    type: ActionTypes.PROFILE_SUCCESS,
    payload: profile
})

export const profileFailed = (errmess) => ({
    type: ActionTypes.PROFILE_FAILED,
    payload: errmess
})

export const profileLoading = () => ({
    type: ActionTypes.PROFILE_LOADING
})

export const walletSuccess = (wallet) => ({
    type: ActionTypes.WALLET_SUCCESS,
    payload: wallet
})

export const walletLoading = () => ({
    type: ActionTypes.WALLET_LOADING
})

export const walletFailed = (errmess) => ({
    type: ActionTypes.WALLET_FAILED,
    payload: errmess
})

export const openTransactionSuccess = (info) => ({
    type: ActionTypes.OPEN_TRANSACTION_SUCCESS,
    payload: info.open
})

export const openTransactionFailed = (errmess) => ({
    type: ActionTypes.OPEN_TRANSACTION_FAILED,
    payload: errmess
})

export const openTransactionLoading = () => ({
    type: ActionTypes.OPEN_TRANSACTION_LOADING
})

export const closedTransactionSuccess = (info) => ({
    type: ActionTypes.CLOSED_TRANSACTION_SUCCESS,
    payload: info.closed
})

export const closedTransactionFailed = (errmess) => ({
    type: ActionTypes.CLOSED_TRANSACTION_FAILED,
    payload: errmess
})

export const closedTransactionLoading = () => ({
    type: ActionTypes.CLOSED_TRANSACTION_LOADING
})

export const marketOrderSuccess = (status) => ({
    type: ActionTypes.MARKET_ORDER_SUCCESS,
    payload: status
})

export const marketOrderFailed = (errmess) => ({
    type: ActionTypes.MARKET_ORDER_FAILED,
    payload: errmess
})

export const marketOrderLoading = () => ({
    type: ActionTypes.MARKET_ORDER_LOADING
})

export const stopOrderSuccess = (status) => ({
    type: ActionTypes.STOP_ORDER_SUCCESS,
    payload: status
})

export const stopOrderFailed = (errmess) => ({
    type: ActionTypes.STOP_ORDER_FAILED,
    payload: errmess
})

export const stopOrderLoading = () => ({
    type: ActionTypes.STOP_ORDER_LOADING
})

export const placeStopOrder = (info) => (dispatch) =>{

    dispatch(stopOrderLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    info.email = email
    //console.log('Placing Order ', info)
    return fetch(baseUrl + '/order/stoploss', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(info) 
    })
            .then(response => {
            //console.log(response);
            if (response.ok) {
                return response;
            } 
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(placeStopOrder(info)))
                
            } else {
                /*var error = new Error('Error' + response.status + ': ' + response.statusText);
                response.json().then((data) => error.response = data)
                error.response = response;
                if (error.response.statusText=='UNAUTHORIZED'){console.log('error');
                dispatch(refreshToken()).then(() =>dispatch(placeStopOrder(info)))}
                else{*/
                   return response.text().then(text => {throw Error(text)})
                    //console.log('throw error')
                //throw error
            //};
            }
        },
            error => {
                throw error;
            })
        .then(response => {if (response){return response.json();}
        else return null})
        .then(res => {if (res){dispatch(stopOrderSuccess(res))}})
        .catch(error => dispatch(stopOrderFailed(error)));

}

export const placeMarketOrder = (info) => (dispatch) =>{

    dispatch(marketOrderLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    info.email = email
    //console.log('Placing Order ', info)
    return fetch(baseUrl + '/order/market', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(info) 
    })
            .then(response => {
            //console.log(response);
            if (response.ok) {
                return response;
            } 
            else if (response.status==401){
                //console.log('error')
                dispatch(refreshToken()).then(() =>dispatch(placeMarketOrder(info)))
                
                
            }else {
                //console.log('be')
                /*var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                console.log(error.response)
                if (error.response.statusText=='UNAUTHORIZED'){console.log('error');
                dispatch(refreshToken()).then(() =>dispatch(placeMarketOrder(info)))}*/
               // else{
                    //console.log('throw error')
                    //dispatch(marketOrderFailed(response.json()))
                    return response.text().then(text => {throw Error(text)})
                //throw error
  //};
            }
        },
            error => {
                //console.log('here')
                
                throw error;
            })
        .then(response =>{/* console.log(response); */ if (response){return response.json();}
        else return null})
        .then(res => {if (res){dispatch(marketOrderSuccess(res))}})
        .catch(error => {/* console.log(error); */ dispatch(marketOrderFailed(error))});

}

export const resetAccount = () => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    //console.log('Resetting Account ', email)
    const data = {email: email}
    
    return fetch(baseUrl + '/reset' , {
        method: "PUT",
        body: JSON.stringify(data) ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }       
    })
        .then(response => {
            //console.log(response);
            if (response.ok) {
                return response;
            } 
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(resetAccount()) );
                
            }else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(res => {
            alert('Account Reset Successfully!')
            dispatch(fetchProfile())
            dispatch(fetchClosedTransaction())
            dispatch(fetchOpenTransaction())
            dispatch(fetchWallet())
        })
        .catch(error => alert(error))
        
}

export const fetchClosedTransaction = () => (dispatch) => {

    dispatch(closedTransactionLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token')
    const email = JSON.parse(localStorage.getItem('creds')).email

    return fetch(baseUrl + '/transactions/closed' + `?email=${email}`, {
        
        headers: {
            
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(fetchClosedTransaction()));
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(info => {
            //console.log('closed Transactions ',info)
            dispatch(closedTransactionSuccess(info));dispatch(fetchWallet())})
        .catch(error => {
            //console.log(error)
            dispatch(closedTransactionFailed(error))
        })

}

export const cancelOrder = (orderId) => (dispatch) => {
    //console.log('Cancelling Order ', orderId)
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    const data = {email:  email, order_id: orderId}
    return fetch(baseUrl + '/order/stoploss' , {
        method: "DELETE",
        body: JSON.stringify(data) ,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            //console.log(response);
            if (response.ok) {
                return response;
            } 
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(cancelOrder(orderId)));
                
            }else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => {if (response){return response.json();}
        else return null})
        .then( res => { if (res){alert('Order Cancelled'); dispatch(fetchOpenTransaction()); dispatch(fetchWallet()) }})
        .catch(error =>{ alert(error)});

}

export const fetchOpenTransaction = () => (dispatch) => {
    //await dispatch(fetchWatchlist());
    dispatch(openTransactionLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token')
    const email = JSON.parse(localStorage.getItem('creds')).email

    return fetch(baseUrl + '/transactions/open' + `?email=${email}`, {
        
        headers: {
            
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(fetchOpenTransaction()) );
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => {if (response){return response.json();}
                            else return null})
        .then(info => {if (info){
            //console.log('Open Transactions ',info)
            dispatch(openTransactionSuccess(info));dispatch(fetchWallet())}})
        .catch(error => {
            //console.log(error)
            dispatch(openTransactionFailed(error))
        })

}

export const fetchWallet = () => (dispatch) => {

    dispatch(walletLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token')
    const email = JSON.parse(localStorage.getItem('creds')).email

    return fetch(baseUrl + '/wallet' + `?email=${email}`, {
        
        headers: {
            
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(fetchWallet()) );
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(wallet => {
            //console.log('User Wallet ',wallet)
            dispatch(walletSuccess(wallet))})
        .catch(error => {
            //console.log(error)
            dispatch(walletFailed(error))
        })
}

export const fetchProfile = () => (dispatch) => {

    dispatch(profileLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token')
    const email = JSON.parse(localStorage.getItem('creds')).email

    return fetch(baseUrl + '/myprofile' + `?email=${email}`, {
        
        headers: {
            
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(fetchProfile()) );
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(profile => {
            //console.log('User Profile ',profile)
            dispatch(profileSuccess(profile))})
        .catch(error => {
            //console.log(error)
            dispatch(profileFailed(error))})

}

export const changePassword = (info) => (dispatch) => {

    dispatch(changePasswordLoading())
    const bearer = 'Bearer ' + localStorage.getItem('token')
    const email = JSON.parse(localStorage.getItem('creds')).email
    info.email = email
    // const data = {info:  info}
    //console.log(info)
    fetch(baseUrl + '/password/change', {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(changePassword(info)))
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(status => {
            //console.log('changePassword Status',status)
            dispatch(changePasswordSuccess(status))})
        .catch(error => {
            //console.log(error)
            dispatch(changePasswordFailed(error))})
}

export const newPassword = (email) => (dispatch) => {

    dispatch(newPasswordLoading())
    //console.log(email)
    const bearer = 'Bearer ' + localStorage.getItem('token')
    // const email = JSON.parse(localStorage.getItem('creds')).email
    const data = {email:  email}

    return fetch(baseUrl + '/password/get_new', {
        method: 'PUT',
        body: JSON.stringify(data),
        // body: {'email' : Email},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(newPassword(email)) );
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(status => dispatch(newPasswordSuccess(status)))
        .catch(error => {
            //console.log(error)
            dispatch(newPasswordFailed(error))})
}

export const getPrediction =  (info) => (dispatch) => {
    dispatch(predictLoading(true))
    const [symbol, time] = [info.symbol, info.time]
    //console.log('Symbol: ', symbol)
    //console.log('interval: ', time)

    return  fetch(baseUrl + `/predict?symbol=${symbol}&time=${time}`, {
        method: 'GET',

    } )
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(prediction => {dispatch(predictSuccess(prediction))})
        .catch(error => {
            //console.log('Predict Error ', error)
            dispatch(predictFailed(error))
        })

}

export const addToWatchlist = (symbol) => (dispatch) => {

    
    //console.log('Symbol: ', symbol);

    const bearer = 'Bearer ' + localStorage.getItem('token');
    
    const email = JSON.parse(localStorage.getItem('creds')).email
    //console.log('email',email)
    const data = {email:  email}
    return fetch(baseUrl + '/watchlist'+`/${symbol}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(addToWatchlist(symbol)));
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(response => { alert(symbol + response.message.slice(6)); dispatch(addSymbol(symbol)); dispatch(fetchWatchlist()); })
        .catch(error => {
            // console.log('Add symbol ', error.message);
            alert('Requested Symbol could not be added\nError: ' + error.message);
        })
}

export const fetchWatchlist =  () => async(dispatch) => {
    dispatch(watchlistLoading())
    //console.log('fetch Watchlist')
    const email = JSON.parse(localStorage.getItem('creds')).email
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const data = {email:  email}
    //console.log('watchlist',data)
     fetch(baseUrl + '/watchlist'+`?email=${email}`, {
        
        
        headers: {
            
            'Authorization': bearer
        },
       /* body: /*JSON.stringify(data)*/
    })
        .then(response => {
            //console.log('wres',response);
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() => dispatch(fetchWatchlist()))
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(watchlist => {/* console.log('watchlist',watchlist); */dispatch(watchlistSuccess(watchlist));})
        .catch(error => dispatch(watchlistFailed(error.message)));
}

export const removeFromWatchlist = (symbol) => (dispatch) => {
    //console.log('Symbol: ', symbol);
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    //const refresh_token = localStorage.getItem('refresh-token');
    const data = {email:  email}
    return fetch(baseUrl + '/watchlist/' + symbol+`?email=${email}`, {
        method: "DELETE",
        body: JSON.stringify(data) ,
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            //console.log(response);
            if (response.ok) {
                return response;
            }
            else if (response.status==401){
                dispatch(refreshToken()).then(() =>dispatch(removeFromWatchlist(symbol)));
                
            }
             else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(watchlist => {/*  console.log('removed from watchlist', watchlist); */ dispatch(fetchWatchlist()); })
        .catch(error => dispatch(watchlistFailed(error.message)));
};

export const requestLogin = (creds) => {
    //console.log(creds)
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    //console.log(response)
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.access_token,
        refresh_token: response.refresh_token,
        
        
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    const obj={email: creds.email}
    const email = JSON.stringify(obj)
    return fetch(baseUrl + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                return response.text().then(text => {throw Error(text)})
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            
                //console.log('success',response)
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.access_token);
                localStorage.setItem('refresh-token', response.refresh_token);
                localStorage.setItem('creds', email);
                
                // Dispatch the success action
                dispatch(fetchWatchlist());
                dispatch(receiveLogin(response));
            
            
        })
        .catch(error => dispatch(loginError(error)))
};

export const requestLogout = () => {
    return {
        type: ActionTypes.LOGOUT_REQUEST
    }
}

export const receiveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}
export const logoutError = (message) => {
    return {
        type: ActionTypes.LOGOUT_FAILURE,
        message
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    
    
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    const data = {email:  email}
    return fetch(baseUrl + '/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response;
            } 
            else if (response.status==401){
               dispatch(refreshToken()).then(() => dispatch(logoutUser()));
                
                
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            
                // If login was successful, set the token in local storage
                localStorage.removeItem('token');
                localStorage.removeItem('refresh-token');
                localStorage.removeItem('creds');
                //localStorage.removeItem('rcreds');
                window.location.reload();
   
                dispatch(receiveLogout())
            
        })
        .catch(error => dispatch(logoutError(error.message)))
}

export const requestRefresh = (token) => {
    return {
        type: ActionTypes.REFRESH_REQUEST,
        token
    }
}

export const receiveRefresh = (response) => {
    return {
        type: ActionTypes.REFRESH_SUCCESS,
        token: response.access_token,
        
    }
}

export const refreshError = (message) => {
    return {
        type: ActionTypes.REFRESH_FAILURE,
        message
    }
}

export const refreshToken = () => (dispatch) => {
    // We dispatch requestRefresh to kickoff the call to the API
    //console.log('Refresshing')
    const token = localStorage.getItem('refresh-token');
    dispatch(requestRefresh(token))
    const bearer = 'Bearer ' + token;
    return fetch(baseUrl + '/reauth', {
        method: 'GET',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
            /* else if(response.status==401){
                localStorage.removeItem('token');
                localStorage.removeItem('refresh-token');
                localStorage.removeItem('creds');
                alert('Login Again')
                window.location.reload();
                return response.text().then(text => {throw Error(text)})
            } */
             else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.access_token);
                
                
                // Dispatch the success action
                dispatch(receiveRefresh(response))
                
            
        })
        .catch(error => dispatch(refreshError(error)))
};

export const requestRegister = (creds) => {
    return {
        type: ActionTypes.REGISTER_REQUEST,
        creds
    }
}

export const receiveRegister = () => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        
        
    }
}

export const registerError = (message) => {
    return {
        type: ActionTypes.REGISTER_FAILURE,
        message
    }
}

export const registerUser = (creds) => (dispatch) => {
    // We dispatch requestRegister to kickoff the call to the API
    dispatch(requestRegister(creds))

    return fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    })
        .then(response => {
            //console.log(response)
            if (response.ok) {
                return response;
            }
             else {
                return response.text().then(text => {throw Error(text)})
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response => {
            
                
                
               // localStorage.setItem('rcreds', JSON.stringify(creds));
                
                // Dispatch the success action
                
                dispatch(receiveRegister());
            
        })
        .catch(error => dispatch(registerError(error)))
};