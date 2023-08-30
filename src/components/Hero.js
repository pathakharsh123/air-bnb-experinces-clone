import React from "react";
const Hero = () => {
    return (
        <div >
            <img src={process.env.PUBLIC_URL + `/images/Group 77.png`} className="photo" />
            <h1 className="heading">Online Experiences</h1>
            <p className="about">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}

export default Hero