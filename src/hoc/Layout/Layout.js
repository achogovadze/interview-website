import React, { useState } from 'react'

import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const layout = props => {
    return (
        <React.Fragment>
            <Toolbar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default layout