import React from 'react'
import GameItem from './GameItem'

const GamesList = ({games}) => {

    console.log(games)

    const gameItems = games.map((game, index) => {
        return <GameItem game={game} key={index} />
      });

  return (
        <>
            <ul className="list">{gameItems}</ul>
        </>
    )
}

export default GamesList