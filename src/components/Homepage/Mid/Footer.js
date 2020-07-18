import React from 'react'
import classes from './Footer.css'
import image from '../../../assets/zivmiii/Layer 2@2x.png'

const footer = props => {
    return (
        <div className={classes.Footer}>
            <div className={classes.Outer}>
                <div className={classes.Container}>
                    <div className={classes.Content}>
                        <h3>CONTACT US</h3>
                        <h1>Get In Touch With Us</h1>
                        <p>Contact us immediately and have the opportunity to take</p>
                        <p>advantage of special opportunities for you</p>
                    </div>
                    <div className={classes.Form}>
                        <input placeholder="Enter your business email" />
                        <div className={classes.Button}><div>Get Started</div></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className={classes.ImageContainer}>
                        <img src={image} />
                    </div>
                    <div className={classes.FooterRefs}>
                        <a>Features</a>
                        <a>About Us</a>
                        <a>Services</a>
                        <a>Contact</a>
                    </div>
                </div>
                <hr />
                <div className={classes.Endnote}>
                    <p>© 2020 Zivmi. All Rights Reserved</p>
                </div>
            </div>
        </div >
    )
}

export default footer