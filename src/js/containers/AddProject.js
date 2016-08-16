import React from 'react'
import {connect} from 'react-redux'
import {addProject} from '../actions/index'

let AddProject = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()) {
                    return
                }
                dispatch(addProject(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Add Project
                </button>
            </form>
        </div>
    )
}

AddProject = connect()(AddProject)

export default AddProject