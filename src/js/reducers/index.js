import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {ADD_PROJECT} from '../constants/actionTypes'

const projects = (state = {}, action) => {
    switch(action.type) {
        // add the date created
        case ADD_PROJECT:
            return Object.assign({}, state, {
                [action.id]: {
                    projectName: action.projectName,
                    id: action.id
                }
            })
            break

        default:
            return state
    }
}

const app = combineReducers({
    projects,
    routing: routerReducer
})

export default app
