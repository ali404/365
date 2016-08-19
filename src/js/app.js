import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'

import reducer from './reducers/index'

import {fetchProjects} from './actions/index'

import App from './routes/App'
import Project from './routes/Project'
import AddProject from './routes/AddProject'

const loggerMiddleware = createLogger()

let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(fetchProjects())

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path="/" component={AddProject} />
                <Route path="/projects/:projectId" component={Project} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('365')
)
