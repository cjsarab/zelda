import React from 'react'
import { Link, useParams} from 'react-router-dom'

const SingleGame = () => {

    console.log(useParams());

    const {productId} = useParams();

  return (
    <>
    <div>
        Single Game
    </div>
    <Link to='/games'> Back to Games </Link>
    </>
  )
}

export default SingleGame