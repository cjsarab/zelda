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
        </ul>
    </div>
  )
}

export default NavBar