import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

const SinglePlace = ({places}) => {

    const {placeId} = useParams();

    const place = places.find((place) => place.id === placeId);
    console.log(place.inhabitants)

    const slicedAppearance = place.appearances[0].slice(-24)
    // const slicedInhabitant = place.inhabitants[0].slice(-24)

  return (
    <>
    <div className='single-item'>
        <div className='item'>
            <div className='details'>
            <h2>
                {place.name}
            </h2>
            <div>
                <Link className="link" to={`/games/${slicedAppearance}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>

                </Link>
            </div>
            <div className='description'>
                {place.description}
            </div>
            <div>
                <Link className="link" to='/places'>
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                </Link>
            </div>
{/* 
            <div>
                <Link to={`/characters/${slicedInhabitant}`}> Inhabited by ... </Link>
            </div> */}
            </div>
        </div>
    </div>


    </>
  )
}

export default SinglePlace