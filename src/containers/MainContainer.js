import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UseParams } from "react-router-dom";

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import GamesList from '../components/GamesList';
import SingleGame from '../components/SingleGame';
import StaffList from '../components/StaffList';


const MainContainer = () => {

    const [games, setGames] = useState([])
    const [staff, setStaff] = useState([])

    const [gameId, setGameId] = useState("")

    useEffect(() => {
        getGames();
        getStaff();
    }, []);

    const getGames = function() {
        fetch("https://zelda.fanapis.com/api/games")
        .then(res => res.json())
        .then(data => setGames(data.data))
    };

    const getStaff = function() {
        fetch("https://zelda.fanapis.com/api/staff")
        .then(res => res.json())
        .then(data => setStaff(data.data))
    };

    const getGameId = function(gameId) {
        setGameId(gameId);
    }

    games.sort((a, b) => a.released_date - b.released_date)


  return (
    <>
    <Router>
        <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/games" element={<GamesList games={games} getGameId={getGameId}/>} />
                {/* <Route exact path="/games/:gameId" element={<GameItem games={games} />} /> */}
                <Route exact path="/games/:gameId" element={<SingleGame games={games} />} />
                <Route exact path="/staff" element={<StaffList staff={staff} /> } />



            </Routes>
    </Router>
    </>
  )
}

export default MainContainer