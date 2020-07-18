import React from 'react'
import classes from './BodyUp.css'
import image from '../../../assets/zivmiii/Iphone X Font v2@2x.png'

const mid = props => {
    return (
        <div className={classes.Outer}>
            <div className={classes.SecondMid}>
                <div className={classes.SideElement}></div>
                <div className={classes.Container}>
                    <img src={image} />
                </div>
            </div>
            <div className={classes.ContentArea}>
                <div className={classes.Content}>
                    <h3>REWARDS</h3>
                    <h1>Use Zivmi Points In Over</h1>
                    <h1>500 Shops And Malls</h1>
                    <p>You can shop from the most famous shops and malls in the world. With the Zivmi application, you can spend your points in more than 500 shops.</p>
                    <div className={classes.Button}><div>EXPLORE</div></div>
                </div>
            </div>
        </div>
    )
}


export default mid