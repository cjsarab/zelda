import React from 'react'
import { Link, useParams } from 'react-router-dom'

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
                <Link className="link" to={`/games/${slicedmonster}`}>Was In ... </Link>
            </div>
            <div className="description">
                {monster.description}
            </div>

            <div>
                <Link className="link" to='/monsters'> Back to monsters </Link>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SingleMonster