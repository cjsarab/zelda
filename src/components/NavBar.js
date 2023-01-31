import React from 'react'
import { Link } from 'react-router-dom';
import homeLogo from '../img/homeLogo.png'
import cartridge from '../img/cartridge.png'


const NavBar = () => {

  return (
    <div className="navi">
        <ul className="navi-links">

            <li className='home'>
                <Link to="/">
                <img className="home-logo-button" src={homeLogo} alt="logo"></img>
                </Link>
            </li>

            <li className='games'>
                <Link to="/games">
                <img className="other-logo-button" src={cartridge} alt="logo"></img>
                </Link>
            </li>
            <li className='staff'>
                <Link to="/staff">Staff</Link>
            </li>
            <li className='characters'>
                <Link to="/characters">Characters</Link>
            </li>
            <li className='monsters'>
                <Link to="/monsters">Monsters</Link>
            </li>
            <li className='bosses'>
                <Link to="/bosses">Bosses</Link>
            </li>
            <li className='dungeons'>
                <Link to="/dungeons">Dungeons</Link>
            </li>
            <li className='places'>
                <Link to="/places">Places</Link>
            </li>
            <li className='items'>
                <Link to="/items">Items</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar