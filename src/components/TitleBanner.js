import React from 'react'
import Triforce from '../img/Triforce.png'
import { Link } from 'react-router-dom';
import homeLogo from '../img/homeLogo.png';



const TitleBanner = () => {
  return (
    <>
    <div className="title-banner">
        <div className='home'>
            <Link to="/">
            <img className="home-logo-button" src={homeLogo} title="Home" alt="logo"></img>
            </Link>
        </div>
            <h1 className="header">
                BENEATH THE WELL
            </h1>
        {/* <img src={Triforce} alt="triforce"/> */}
    </div>
    </>

  )
}

export default TitleBanner