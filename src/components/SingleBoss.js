import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

const SingleBoss = ({bosses}) => {

    const {bossId} = useParams();
    const boss = bosses.find((boss) => boss.id === bossId);

    console.log("Boss" + boss.name)

    let bossAppearances = {};
    let bossDungeons = {};

    console.log(boss)


    let slicedBossAppearance = boss.appearances[0].slice(-24)
    let slicedBossDungeon = boss.dungeons[0].slice(-24)

    bossAppearances[0] = slicedBossAppearance
    bossDungeons[0] = slicedBossDungeon

    console.log(bossDungeons)



  return (
    <>
    <div className='single-item'>
        <div className='item'>
            <div className="details">
            <h2>
                {boss.name}
            </h2>
            <div>
                <Link className="link" to={`/games/${bossAppearances[0]}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>
                </Link>
            </div>
            <div className="description">
                {boss.description}
            </div>
            {/* <div>
                <Link className="link" to={`/dungeons/${bossDungeons[0]}`}>Dungeon... </Link>
            </div> */}

            <div>
                <Link className="link" to='/bosses'>
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                </Link>
            </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default SingleBoss