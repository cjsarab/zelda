import React from 'react'
import { Link } from 'react-router-dom';

const GamesList = ({games, getGameId}) => {


    games.sort(function (x, y) {
        let a = new Date(x["released_date"]);
        let b = new Date(y["released_date"]);
        return a - b;
    })

    const gameItems = games.map((game) => {
    return <div key={game.id}>
            <h2>
                {game.name}
            </h2>
            <Link to={`/games/${game.id}`}>More info...</Link>
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
                <hr></hr>
            </div>
            </div>
      });


  return (
        <>
            <ul className="list">{gameItems}</ul>
        </>
    )
}

export default GamesList