import React from 'react'
import classes from './BodyMid.css'
import image from '../../../assets/zivmiii/man-wearing-black-zip-up-jacket-near-beach-smiling-at-the-736716 (8)@2x.png'

const mid = props => {
    return (
        <div className={classes.Outer}>
            <div className={classes.ContentArea}>
                <div className={classes.Content}>
                    <h3>PAYMENTS</h3>
                    <h1>Pay Like A Local - Get The</h1>
                    <h1>Real Exchange Rate</h1>
                    <p>Spend abroad in over 150 currencies at the Real (Interbank) exchange rates - with no hidden fees. All payments will be instantly transferred to the account of the person you want within seconds.</p>
                    <div className={classes.Button}><div>GET STARTED</div></div>
                </div>
            </div>
            <div className={classes.Wrapper}>
                <div className={classes.SideElement}></div>
                <div className={classes.UserWrapper}>
                    <div className={classes.User}>
                        <div className={classes.UserImageContainer}>
                            <img src={image} />
                        </div>
                        <p className={classes.Title}>Send Money to John</p>
                        <div className={classes.TransactionsContainer}>
                            <div className={classes.Transaction}>
                                <div>
                                    <p>You Send</p>
                                    <h3 className={classes.Amount}>$250</h3>
                                </div>
                                <div>
                                    <h3>USD</h3>
                                </div>
                            </div>
                            <hr />
                            <div className={classes.Transaction}>
                                <div>
                                    <p>John gets</p>
                                    <h3 className={classes.Amount}>$3.937.38</h3>
                                </div>
                                <div>
                                    <h3>EGP</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default mid