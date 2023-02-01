import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

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
                <Link className="link" to={`/games/${slicedCharacter}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>

                    </Link>
            </div>
            <div className="description">
                {character.description}
            </div>

            <div>
                <Link className="link" to='/characters'>
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                </Link>
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