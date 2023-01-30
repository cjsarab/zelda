import React from 'react'
import { Link } from 'react-router-dom';

const bossesList = ({bosses}) => {


    bosses.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const bossItems = bosses.map((boss) => {
    return <div key={boss.id}>
                <h2>  {boss.name}  </h2>
            <Link to={`/bosses/${boss.id}`}>Description...</Link>

                <hr></hr>
            </div>
      });


  return (
        <>
            <ul className="list">{bossItems}</ul>
        </>
    )
}

export default bossesList