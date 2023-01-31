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
            <h2>
                {place.name}
            </h2>
            <div>
                <Link to={`/games/${slicedAppearance}`}>Was In ... </Link>
            </div>
            <div>
                {place.description}
            </div>
{/* 
            <div>
                <Link to={`/characters/${slicedInhabitant}`}> Inhabited by ... </Link>
            </div> */}

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SinglePlace