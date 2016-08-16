import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'

import reducer from './reducers/index'
import App from './components/App.react'

const loggerMiddleware = createLogger()

let store = createStore(
    reducer,
    applyMiddleware(
        loggerMiddleware
    )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('365')
)
