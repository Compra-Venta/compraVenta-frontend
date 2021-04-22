import * as ActionTypes from './actionTypes';
const baseUrl='http://127.0.0.1:5000'

export const watchlistLoading = () => ({
    type: ActionTypes.WATCHLIST_LOADING
});

export const watchlistFailed = (errmess) => ({
    type: ActionTypes.WATCHLIST_FAILED,
    payload: errmess
});

export const watchlistSuccess = (watchlist) => ({
    type: ActionTypes.WATCHLIST_SUCCESS,
    payload: watchlist
});

export const addSymbol = (symbol) => ({
    type: ActionTypes.ADD_SYMBOL,
    payload: symbol
});

export const predictSuccess = (predict) => ({
    type: ActionTypes.PREDICT_SUCCESS,
    payload: predict
});

export const predictFailed = (errmess) => ({
    type: ActionTypes.PREDICT_FAILED,
    payload: errmess
});

export const predictLoading = (predict) => ({
    type: ActionTypes.PREDICT_LOADING
});

export const getPrediction = (symbol, time) => (dispatch) => {

    console.log('Symbol: ', symbol)
    console.log('interval: ', time)

    return fetch(baseUrl + `/predict?symbol=${symbol}&time=${time}`, {
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
        .catch(error => {
            console.log('Predict Error ', error)
        })

}

export const addToWatchlist = (symbol) => (dispatch) => {

    
    console.log('Symbol: ', symbol);

    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email

    return fetch(baseUrl + '/watchlist'+`/${symbol}`, {
        method: 'POST',
        body: {'email' :JSON.stringify(email)},
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        }
    })
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
        .then(response => { alert(response); dispatch(addSymbol(symbol)); dispatch(fetchWatchlist()); })
        .catch(error => {
            console.log('Add symbol ', error.message);
            alert('Requested Symbol could not be added\nError: ' + error.message);
        })
}

export const fetchWatchlist = () => (dispatch) => {
    dispatch(watchlistLoading(true));
    const email = JSON.parse(localStorage.getItem('creds')).email
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'watchlist', {
        body: {'email' :JSON.stringify(email)},
        headers: {
            'method': 'GET',
            'Authorization': bearer
        },
    })
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
        .then(watchlist => dispatch(watchlistSuccess(watchlist)))
        .catch(error => dispatch(watchlistFailed(error.message)));
}

export const removeFromWatchlist = (symbol) => (dispatch) => {
    console.log('Symbol: ', symbol);
    const bearer = 'Bearer ' + localStorage.getItem('token');
    const email = JSON.parse(localStorage.getItem('creds')).email
    return fetch(baseUrl + '/watchlist/' + symbol, {
        method: "DELETE",
        body: {'email' :JSON.stringify(email)},
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(watchlist => { console.log('removed from watchlist', watchlist); dispatch(fetchWatchlist()); })
        .catch(error => dispatch(watchlistFailed(error.message)));
};

export const requestLogin = (creds) => {
    console.log(creds)
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}

export const receiveLogin = (response) => {
    console.log(response)
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
            
                console.log('success',response)
                // If login was successful, set the token in local storage
                localStorage.setItem('token', response.access_token);
                localStorage.setItem('refresh-token', response.refresh_token);
                localStorage.setItem('creds', JSON.stringify(creds));
                
                // Dispatch the success action
                dispatch(fetchWatchlist());
                dispatch(receiveLogin(response));
            
            
        })
        .catch(error => dispatch(loginError(error.message)))
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
    return fetch(baseUrl + '/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        body: {'email' :JSON.stringify(email)}
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
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
                localStorage.removeItem('creds');
    
   
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

export const refreshToken = (token) => (dispatch) => {
    // We dispatch requestRefresh to kickoff the call to the API
    dispatch(requestRefresh(token))
    return fetch(baseUrl + '/reauth'+ `?"${token}"`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
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
        .catch(error => dispatch(refreshError(error.message)))
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
            console.log(response)
            if (response.ok) {
                return response;
            } else {
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
            
                
                
                localStorage.setItem('rcreds', JSON.stringify(creds));
                
                // Dispatch the success action
                
                dispatch(receiveRegister());
            
        })
        .catch(error => dispatch(registerError(error.message)))
};