import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleBoss = ({bosses}) => {

    const {bossId} = useParams();
    const boss = bosses.find((boss) => boss.id === bossId);

    console.log("Boss" + boss.name)

    let bossAppearances = {};
    let bossDungeons = {};

    console.log(boss)


    let slicedBossAppearance = boss.appearances[0].slice(-24)
    // let slicedBossDungeon = boss.dungeons[0].slice(-24)

    bossAppearances[0] = slicedBossAppearance
    // bossDungeons[0] = slicedBossDungeon

    console.log(bossDungeons)



  return (
    <>
            <h2>
                {boss.name}
            </h2>
            <div>
                <Link to={`/games/${bossAppearances[0]}`}>Game In... </Link>
            </div>
            <div>
                {boss.description}
            </div>
            {/* <div>
                <Link to={`/dungeons/${bossDungeons[0]}`}>Dungeon... </Link>
            </div> */}

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