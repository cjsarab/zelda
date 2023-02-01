import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleCharacter = ({characters}) => {

    const {characterId} = useParams();

    const character = characters.find((character) => character.id === characterId);
    console.log(character.appearances)

    const slicedCharacter = character.appearances[0].slice(-24)

  return (
    <>
    <div className="single-item">
        <div className="item">
            <div className="details">
            <h2>
                {character.name}
            </h2>
            <div>
                <Link className="link" to={`/games/${slicedCharacter}`}>Was In ... </Link>
            </div>
            <div className="description">
                {character.description}
            </div>

            <div>
                <Link className="link" to='/characters'> Back to characters </Link>
            </div>

            <div>
            </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default SingleCharacter