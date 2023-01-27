import React from 'react'
import { Link } from 'react-router-dom';

const CharactersList = ({characters}) => {

    characters.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })


    const characterItems = characters.map((character) => {


    return <div key={character.id}>
                <h2>  {character.name}  </h2>
            <Link to={`/characters/${character.id}`}>Description... </Link>

            <div>   <b>Gender: </b>{character.gender}</div>
            <div>   <b>Race: </b>{character.race}</div>
                <hr></hr>
            </div>
      });


  return (
        <>
            <ul className="list">{characterItems}</ul>
        </>
    )
}

export default CharactersList