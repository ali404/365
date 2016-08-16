import React from 'react'
import Menu from '../components/Menu'
import CurrentProjectList from '../containers/CurrentProjectList'

const AppRoute = ({children}) => (
    <div>
        <Menu />
        {children}
        <CurrentProjectList />
    </div>
)

export default AppRoute
