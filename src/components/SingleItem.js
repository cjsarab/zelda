import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleItem = ({items}) => {

    const {itemId} = useParams();

    const item = items.find((item) => item.id === itemId);
    console.log(item.games)

    const slicedItem = item.games[0].slice(-24)

  return (
    <>
    <div className='single-item'>
        <div className='item'>
            <div className='details'>
            <h2>
                {item.name}
            </h2>
            <div>
                <Link className='link' to={`/games/${slicedItem}`}>Was In ... </Link>
            </div>
            <div className='description'>
                {item.description}
            </div>

            <div>
                <Link className='link' to='/items'> Back to items </Link>
            </div>

            </div>
        </div>
    </div>


    </>
  )
}

export default SingleItem