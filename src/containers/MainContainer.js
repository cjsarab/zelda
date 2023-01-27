import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import GamesList from '../components/GamesList';
import SingleGame from '../components/SingleGame';
import StaffList from '../components/StaffList';
import CharactersList from '../components/CharactersList';
import SingleCharacter from '../components/SingleCharacter';


const MainContainer = () => {

    const [games, setGames] = useState([])
    const [staff, setStaff] = useState([])
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        getGames();
        getStaff();
        getCharacters();
    }, []);

    const getGames = function() {
        fetch("https://zelda.fanapis.com/api/games?limit=100")
        .then(res => res.json())
        .then(data => setGames(data.data))
    };

    const getStaff = function() {
        fetch("https://zelda.fanapis.com/api/staff")
        .then(res => res.json())
        .then(data => setStaff(data.data))
    };

    const getCharacters = function() {
        fetch("https://zelda.fanapis.com/api/characters?limit=200")
        .then(res => res.json())
        .then(data => setCharacters(data.data))
    }


  return (
    <>
    <Router>
        <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/games" element={<GamesList games={games}/>} />
                <Route exact path="/games/:gameId" element={<SingleGame games={games} />} />
                <Route exact path="/staff" element={<StaffList staff={staff}/> } />
                <Route exact path="/characters" element={<CharactersList characters={characters}/>} />
                <Route exact path="/characters/:characterId" element={<SingleCharacter characters={characters} />} />


            </Routes>
    </Router>
    </>
  )
}

export default MainContainer