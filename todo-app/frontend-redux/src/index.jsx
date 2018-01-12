import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promisse from 'redux-promise'
import multi from 'redux-multi'

import App from './main/app'
import reducers from './main/reducers'
import thunk from 'redux-thunk'

//Debug com DevTools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//Criando a store
const store = applyMiddleware(thunk, multi, promisse)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))