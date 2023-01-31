import React from 'react'
import { Link, useParams} from 'react-router-dom'

const SingleGame = ({games}) => {

    const {gameId} = useParams();
    const game = games.find((game) => game.id === gameId);

  return (
    <>
            <h2>
                {game.name}
            </h2>
            <div>
                {game.description}
            </div>
            <div>
                <b>Developer: </b>{game.developer}
            </div>
            <div>
                <b>Publisher: </b>{game.publisher}
            </div>
            <div>
                <b>Release Date: </b>{game.released_date}
            </div>
            <div>
                <Link to='/games'> All games... </Link>
            </div>
            <div>
                <hr></hr>
            </div>

    </>
  )
}

export default SingleGame