import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import {
    ADD_PROJECT,
    DELETE_PROJECT,
    EDIT_PROJECT,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_REQUEST
} from '../constants/actionTypes'

const projects = (state = {
    isFetching: false,
    items: {}
}, action) => {
    switch(action.type) {
        // add the date created
        case ADD_PROJECT:
            return Object.assign({}, state, {
                items: {
                    ...state.items,
                    [action.id]: {
                        projectName: action.projectName,
                        id: action.id,
                        dateCreated: action.receivedAt,
                        lastUpdated: action.receivedAt
                    }
                }
            })

            break

        case DELETE_PROJECT:
            let newState = Object.assign({}, state)
            newState.items = Object.assign({}, state.items)
            delete newState.items[action.id]
            return newState

            break

        // case EDIT_PROJECT:
        //     return Object.assign({}, state, {
        //         [action.id]: {
        //             id: action.id,
        //             projectName: action.projectName
        //         }
        //     })
        //
        //     break

        case FETCH_PROJECTS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
            break

        case FETCH_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.projects,
                lastUpdated: action.recievedAt
            })

            break

        default:
            return state
    }
}

const app = combineReducers({
    projects,
    routing
})

export default app
