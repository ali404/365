import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT
} from '../constants/actionTypes'

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

        case DELETE_PROJECT:
            let newState = Object.assign({}, state)
            newState[action.id] = Object.assign({}, state[action.id])
            delete newState[action.id]
            return newState

            break

        case EDIT_PROJECT:
            return Object.assign({}, state, {
                [action.id]: {
                    id: action.id,
                    projectName: action.projectName
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
