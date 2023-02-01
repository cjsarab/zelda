import React from 'react'
import { Link } from 'react-router-dom';
import cartridge from '../img/cartridge.png'
import PostmansHat from '../img/PostmansHat.png'
import link from '../img/link.png'
import Guardian from '../img/Guardian.png'
import Twinmold from '../img/Twinmold.png'
import DungeonMap from '../img/DungeonMap.png'
import Windmill from '../img/Windmill.png'
import Hookshot from '../img/Hookshot.png'
import BotWLogo from '../img/BotWLogo.png'


const NavBar = () => {

  return (
    <div className="navi">
        <ul className="navi-links">

            <li className='games'>
                <Link to="/games">
                <img className="other-logo-button" src={BotWLogo} title="Games" alt="logo"></img>
                </Link>

            </li>
            <li className='staff'>
                <Link to="/staff">
                <img className="other-logo-button" src={PostmansHat} title="Staff" alt="logo"></img>
                </Link>

            </li>
            <li className='characters'>
                <Link to="/characters">
                <img className="other-logo-button" src={link} title="Characters" alt="logo"></img>
                </Link>
            </li>
            <li className='monsters'>
                <Link to="/monsters">
                <img className="other-logo-button" src={Guardian} title="Monsters" alt="logo"></img>
                </Link>
            </li>
            <li className='bosses'>
                <Link to="/bosses">
                <img className="other-logo-button" src={Twinmold} title="Bosses" alt="logo"></img>
                </Link>
            </li>
            <li className='dungeons'>
                <Link to="/dungeons">
                <img className="other-logo-button" src={DungeonMap} title="Dungeons" alt="logo"></img>
                </Link>
            </li>
            <li className='places'>
                <Link to="/places">
                <img className="other-logo-button" src={Windmill} title="Locations" alt="logo"></img>
                </Link>
            </li>
            <li className='items'>
                <Link to="/items">
                <img className="other-logo-button" src={Hookshot} title="Items" alt="logo"></img>
                </Link>
            </li>
            <li className='items'>
                <Link to="/data">
                <img className="other-logo-button" src={Hookshot} title="Items" alt="logo"></img>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar