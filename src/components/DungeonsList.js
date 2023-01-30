import React from 'react'
import { Link } from 'react-router-dom';

const dungeonsList = ({dungeons}) => {


    dungeons.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const dungeonItems = dungeons.map((dungeon) => {
    return <div key={dungeon.id}>
                <h2>  {dungeon.name}  </h2>
            <Link to={`/dungeons/${dungeon.id}`}>Description...</Link>

                <hr></hr>
            </div>
      });


  return (
        <>
            <ul className="list">{dungeonItems}</ul>
        </>
    )
}

export default dungeonsList