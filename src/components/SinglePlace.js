import React from 'react'
import { Link, useParams } from 'react-router-dom'

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
                <Link className="link" to={`/games/${slicedAppearance}`}>Was In ... </Link>
            </div>
            <div className='description'>
                {place.description}
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