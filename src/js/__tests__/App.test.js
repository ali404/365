import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

import App from '../routes/App.route.js'

describe('App', () => {
    let app

    beforeEach(() => {
        if(app) {
            app.unmount()
        }

        app = mount(<App />)
    })

    it('should render', () => {
        expect(app).to.be.defined
    })
})
