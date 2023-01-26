import React, { useEffect, useState } from 'react';

import GamesList from '../components/GamesList';


const MainContainer = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        getGames();
    }, []);

    const getGames = function() {
        fetch("https://zelda.fanapis.com/api/games")
        .then(res => res.json())
        .then(data => setGames(data.data))
    };

  return (
    <>
        <GamesList games={games}/>
    </>
  )
}

export default MainContainer