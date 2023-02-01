import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

const SingleDungeon = ({dungeons, setDungeons}) => {

    const {dungeonId} = useParams();

    var dungeon = dungeons.find(dungeon => dungeon.id === dungeonId);


    let dungeonAppearances = {};

    let slicedDungeonAppearance = dungeon.appearances[0].slice(-24)

    dungeonAppearances[0] = slicedDungeonAppearance

  return (
    <>
    <div className='single-item'>
        <div className='item'>
            <div className='details'>
            <h2>
                {dungeon.name}
            </h2>
            <div>
                <Link to={`/games/${dungeonAppearances[0]}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>
                </Link>
            </div>
            <div className="description">
                {dungeon.description}
            </div>
            <div>
                <Link to='/dungeons'> 
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                 </Link>
            </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default SingleDungeon