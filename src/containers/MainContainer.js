import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from '../components/NavBar';
import Home from '../components/Home';
import GamesList from '../components/GamesList';
import SingleGame from '../components/SingleGame';
import StaffList from '../components/StaffList';
import CharactersList from '../components/CharactersList';
import SingleCharacter from '../components/SingleCharacter';
import MonstersList from '../components/MonstersList';
import SingleMonster from '../components/SingleMonster';
import BossesList from '../components/BossesList';
import SingleBoss from '../components/SingleBoss';
import DungeonsList from '../components/DungeonsList';
import SingleDungeon from '../components/SingleDungeon';

const MainContainer = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState (0)
    const [itemsPerPage, setItemsPerPage] = useState (20)
    const [games, setGames] = useState([])
    const [staff, setStaff] = useState([])
    const [characters, setCharacters] = useState([])
    const [monsters, setMonsters] = useState([])
    const [bosses, setBosses] = useState([])
    const [dungeons, setDungeons] = useState([])


    useEffect(() => {
        // getItemsPerPage();
        getGames();
        getStaff();
        getCharacters();
        getMonsters();
        getBosses();
        getDungeons();
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
    };

    const getMonsters = function() {
        fetch("https://zelda.fanapis.com/api/monsters?limit=100")
        .then(res => res.json())
        .then(data => setMonsters(data.data))
    };

    const getBosses = function() {
        fetch("https://zelda.fanapis.com/api/bosses?limit=100")
        .then(res => res.json())
        .then(data => setBosses(data.data))
    };

    const getDungeons = function() {
        fetch(`https://zelda.fanapis.com/api/dungeons?limit=10&page=${currentPage}`)
        .then(res => res.json())
        .then(data => setDungeons(data.data))
    };

    // async function getDungeons() {
    //     let allData = [];
    //     let morePagesAvailable = true;
    //     let currentPage = 0;
      
    //     while(morePagesAvailable) {
    //       currentPage++;
    //       const response = await fetch(`https://zelda.fanapis.com/api/dungeons?page=${currentPage}`)
    //       let { data, total_pages } = await response.json();
    //       data.forEach(e => allData.unshift(e));
    //       morePagesAvailable = currentPage < total_pages;
    //     }
      
    //     setDungeons(allData)
    //   }

    function nextCurrentPage() {
        console.log("Current page = " + currentPage)
        setCurrentPage(currentPage+1)
        console.log("Changed current page to " + currentPage)
    }

    function assignCurrentPage(page) {
        setCurrentPage(page)
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
                <Route exact path="/monsters" element={<MonstersList monsters={monsters}/>} />
                <Route exact path="/monsters/:monsterId" element={<SingleMonster monsters={monsters} />} />
                <Route exact path="/bosses" element={<BossesList bosses={bosses}/>} />
                <Route exact path="/bosses/:bossId" element={<SingleBoss bosses={bosses} />} />
                <Route exact path="/dungeons" element={<DungeonsList dungeons={dungeons} assignCurrentPage={assignCurrentPage} getDungeons={getDungeons} setDungeons={setDungeons}/>} />
                <Route exact path="/dungeons/:dungeonId" element={<SingleDungeon dungeons={dungeons}/>} />

            </Routes>
    </Router>
    </>
  )
}

export default MainContainer