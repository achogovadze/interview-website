import React from 'react'
import Upper from './Upper/Upper'
import Intro from './Mid/Intro'
import BodyUp from './Mid/BodyUp'
import BodyMid from './Mid/BodyMid'
import BodyBottom from './Mid/BodyBottom'
import Footer from './Mid/Footer'
const homepage = props => {
    return (
        <div>
            <Upper />
            <Intro />
            <BodyUp />
            <BodyMid />
            <BodyBottom />
            <Footer />
        </div>
    )
}

export default homepage