import React from 'react'

import Logo from '../../assets/zivmiii/Layer 2@2x.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Logo"></img>
    </div>
)

export default logo