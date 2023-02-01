import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

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
                <Link to={`/games/${dungeonAppearances[0]}`}>Was In... </Link>
            </div>
            <div className="description">
                {dungeon.description}
            </div>

            <div>
                <Link to='/dungeons'> Back to dungeons... </Link>
            </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default SingleDungeon