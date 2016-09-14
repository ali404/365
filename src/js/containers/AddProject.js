import React, {Component} from 'react'
import {connect} from 'react-redux'
import {saveProject} from '../actions/index'

class AddProjectClass extends Component {
    constructor() {
        super()

        this.state = {
            inputVal: ''
        }
    }

    render() {
        return (
            <div>
                <div className="add-form">
                    <input
                        className="add-input"
                        value={this.state.inputVal}
                        onKeyUp={e => {
                            if(e.keyCode === 13) {
                                e.preventDefault()
                                if(!e.target.value.trim()) {
                                    return
                                }
                                this.props.dispatch(saveProject(e.target.value))
                                    .then(() => {
                                        this.setState({
                                            inputVal: ''
                                        })
                                    })
                            }
                        }}
                        onChange={e => {
                            this.setState({
                                inputVal: e.target.value
                            })
                        }}
                    />
                </div>
            </div>
        )
    }
}

let AddProject = connect()(AddProjectClass)

export default AddProject
