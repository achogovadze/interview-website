import React from 'react'
import classes from './BodyBottom.css'

import image1 from '../../../assets/zivmiii/photography-of-a-guy-wearing-green-shirt-1222271 (11)@2x.png'
import image2 from '../../../assets/zivmiii/photo-of-woman-wearing-black-top-2772091@2x.png'
import image3 from '../../../assets/zivmiii/smiling-woman-wearing-black-sweater-1587009@2x.png'
import image4 from '../../../assets/zivmiii/photo-of-woman-wearing-black-top-2772091@2x.png'
import image5 from '../../../assets/zivmiii/a-woman-posing-in-a-casual-wear-2880374@2x.png'

const mid = props => {
    return (
        <div className={classes.Outer}>
            <div className={classes.Title}>
                <h3>T E S T I M O N I A L</h3>
                <h1>What People Say About Us</h1>
            </div>
            <div className={classes.Images}>
                <div className={classes.Container}>
                    <img src={image2} />
                </div>
                <div className={classes.Container}>
                    <img src={image3} />
                </div>
                <div className={classes.Container}>
                    <img src={image1} />
                </div>
                <div className={classes.Container}>
                    <img src={image4} />
                </div>
                <div className={classes.Container}>
                    <img src={image5} />
                </div>
            </div>
            <div className={classes.Footer}>
                <p>I can send money instantly whenever I want.</p>
                <p>I earn points when I send money.</p>
                <h4>Johny Mellow</h4>
            </div>

        </div>
    )
}

export default mid