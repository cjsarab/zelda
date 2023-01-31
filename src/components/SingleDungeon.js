import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleDungeon = ({dungeons}) => {

    const {dungeonId} = useParams();
    var dungeon = dungeons.find((dungeon) => dungeon.id === dungeonId);

    let dungeonAppearances = {};

    let slicedDungeonAppearance = dungeon.appearances[0].slice(-24)

    dungeonAppearances[0] = slicedDungeonAppearance

  return (
    <>
            <h2>
                {dungeon.name}
            </h2>
            <div>
                <Link to={`/games/${dungeonAppearances[0]}`}>Was In... </Link>
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