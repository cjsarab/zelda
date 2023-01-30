import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBoss = ({bosses}) => {

    const {bossId} = useParams();

    const boss = bosses.find((boss) => boss.id === bossId);

    const slicedbossappearance = boss.appearances[0].slice(-24)

    const slicedbossdungeon = boss.dungeons[0].slice(-24)

    console.log(slicedbossdungeon)

  return (
    <>
            <h2>
                {boss.name}
            </h2>
            <div>
                <Link to={`/games/${slicedbossappearance}`}>Game In... </Link>
            </div>
            <div>
                {boss.description}
            </div>
            <div>
                <Link to={`/dungeons/${slicedbossdungeon}`}>Dungeon... </Link>
            </div>

            <div>
                <Link to='/bosses'> Back to bosses... </Link>
            </div>

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleBoss