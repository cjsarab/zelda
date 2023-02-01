import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

const SingleMonster = ({monsters}) => {

    const {monsterId} = useParams();

    const monster = monsters.find((monster) => monster.id === monsterId);

    console.log(monster)


    const slicedmonster = monster.appearances[0].slice(-24)

  return (
    <>
    <div className="single-item">
        <div className="item">
            <div className='details'>
            <h2>
                {monster.name}
            </h2>
            <div>
                <Link className="link" to={`/games/${slicedmonster}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>
                </Link>
            </div>
            <div className="description">
                {monster.description}
            </div>

            <div>
                <Link className="link" to='/monsters'>
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                 </Link>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SingleMonster