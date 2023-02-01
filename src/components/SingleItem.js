import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Arrow from '../img/Arrow.png'
import cartridge2 from '../img/cartridge2.png'

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
                <Link className='link' to={`/games/${slicedItem}`}>
                <img className="other-logo-button" src={cartridge2} title="game" alt="game"></img>
                </Link>
            </div>
            <div className='description'>
                {item.description}
            </div>

            <div>
                <Link className='link' to='/items'>
                <img className="other-logo-button" src={Arrow} title="back" alt="back"></img>
                </Link>
            </div>

            </div>
        </div>
    </div>


    </>
  )
}

export default SingleItem