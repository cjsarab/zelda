import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleDungeon = ({dungeons}) => {

    const {dungeonId} = useParams();

    console.log(dungeonId)
    console.log(dungeons)

    const dungeon = dungeons.find((dungeon) => dungeon.id === dungeonId);

    console.log(dungeon)


    const sliceddungeon = dungeon.appearances[0].slice(-24)

  return (
    <>
            <h2>
                {dungeon.name}
            </h2>
            <div>
                <Link to={`/games/${sliceddungeon}`}>Was In... </Link>
            </div>
            <div>
                {dungeon.description}
            </div>

            <div>
                <Link to='/dungeons'> Back to dungeons... </Link>
            </div>

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleDungeon