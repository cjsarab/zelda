import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleItem = ({items}) => {

    const {itemId} = useParams();

    const item = items.find((item) => item.id === itemId);
    console.log(item.games)

    const slicedItem = item.games[0].slice(-24)

  return (
    <>
            <h2>
                {item.name}
            </h2>
            <div>
                <Link to={`/games/${slicedItem}`}>Was In ... </Link>
            </div>
            <div>
                {item.description}
            </div>

            <div>
                <Link to='/items'> Back to items </Link>
            </div>

            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleItem