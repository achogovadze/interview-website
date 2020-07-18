import React from 'react'
import classes from './Upper.css'
import upperImage1 from '../../../assets/zivmiii/Iphone X Font@2x.png'
import upperImage2 from '../../../assets/zivmiii/Iphone X Font-1@2x.png'
import appStore from '../../../assets/zivmiii/1200px-Download_on_the_App_Store_Badge.svg@2x.png'
import playStore from '../../../assets/zivmiii/google-play-badge@2x.png'

const upper = props => {
    return (
        <div className={classes.Homepage}>
            <div className={classes.Upper}>
                <div className={classes.Intro}>
                    <div className={classes.IntroContent}>
                        <h1>Fast&Secure </h1>
                        <h1>Money Transfer</h1>
                        <p>With this app in hand, you'll have more money in your pocket. Because every time you send, spend, or receive money internationally, you'll pay lowest possible price.</p>
                        <div className={classes.AppIcons}>
                            <div className={classes.AppStoreContainer}>
                                <img src={appStore} />
                            </div>
                            <div className={classes.PlayStoreContainer}>
                                <img src={playStore} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.IntroImage}>
                    <div className={classes.UpperImage1}>
                        <img src={upperImage1} />
                    </div>
                    <div className={classes.Wrap}>
                        <div className={classes.UpperImage2}>
                            <img src={upperImage2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default upper