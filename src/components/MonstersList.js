import React from 'react'
import { Link } from 'react-router-dom';

const MonstersList = ({monsters}) => {


    monsters.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const monsterItems = monsters.map((monster) => {
    return <div key={monster.id}>
                <h2>  {monster.name}  </h2>
            <Link to={`/monsters/${monster.id}`}>Description...</Link>
                <hr></hr>
            </div>
      });


  return (
        <>
            <ul className="list">{monsterItems}</ul>
        </>
    )
}

export default MonstersList