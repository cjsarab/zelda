import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleCharacter = ({characters}) => {

    const {characterId} = useParams();

    const character = characters.find((character) => character.id === characterId);
    console.log(character.appearances)

    const slicedCharacter = character.appearances[0].slice(-24)

  return (
    <>
            <h2>
                {character.name}
            </h2>
            <div>
                <Link to={`/games/${slicedCharacter}`}>Was In ... </Link>
            </div>
            <div>
                {character.description}
            </div>

            <div>
                <Link to='/characters'> Back to characters </Link>
            </div>

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleCharacter