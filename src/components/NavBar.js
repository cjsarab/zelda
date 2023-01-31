import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className="navi">
        <ul className="navi-links">
            <li className='home'>
                <Link to="/">Home</Link>
            </li>
            <li className='games'>
                <Link to="/games">Games</Link>
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