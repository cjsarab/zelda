import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleMonster = ({monsters}) => {

    const {monsterId} = useParams();

    const monster = monsters.find((monster) => monster.id === monsterId);

    console.log(monster)


    const slicedmonster = monster.appearances[0].slice(-24)

  return (
    <>
            <h2>
                {monster.name}
            </h2>
            <div>
                <Link to={`/games/${slicedmonster}`}>Was In ... </Link>
            </div>
            <div>
                {monster.description}
            </div>

            <div>
                <Link to='/monsters'> Back to monsters </Link>
            </div>

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleMonster