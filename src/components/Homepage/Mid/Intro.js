import React from 'react'
import classes from './Intro.css'

const mid = props => {
    return (
        <div>
            <div className={classes.Title}>
                <h1>The key stuff you'd want to</h1>
                <h1>know about app</h1>
            </div>
            <div className={classes.ContentDivs}>
                <div className={classes.ContentDiv}>
                    <h1>0%</h1>
                    <h3>No Fee</h3>
                    <p>Save when you spend around the World There is no fee. Don't need interruption</p>
                </div>
                <div className={classes.ContentDiv}>
                    <h1>5%</h1>
                    <h3>Zivmi Points</h3>
                    <p>Earn hundreds of zivmi points every time you pay. You can use these points in cafes, malls, petrol stations and more</p>
                </div>
                <div className={classes.ShadowedDiv}>
                    <div className={classes.ContentDiv}>
                        <h1>300K</h1>
                        <h3>Trusted By</h3>
                        <p>So far, we have worked with 300 thousand customers and all of them continue to use it with pleasure</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mid