import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const GamesList = ({games, setGames}) => {


    games.sort(function (x, y) {
        let a = new Date(x["released_date"]);
        let b = new Date(y["released_date"]);
        return a - b;
    })

    const gameItems = games.map((game) => {
    return <div key={game.id}>
                <h2>  {game.name}  </h2>
            <Link to={`/games/${game.id}`}>Description...</Link>

            <div>   <b>Developer: </b>{game.developer}</div>
            <div>   <b>Publisher: </b>{game.publisher}</div>
            <div>   <b>Release Date: </b>{game.released_date}</div>
                <hr></hr>
            </div>
      });

      const fetchGames = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/games?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempGamesData = await fetchGames(currentPage);
        setGames(tempGamesData)
    }


  return (
        <>
            <ul className="list">{gameItems}</ul>

            <ReactPaginate
            breakLabel="..."
            previousLabel="Previous Page"
            nextLabel="Next Page"
            onPageChange={handlePageClick}
            pageCount = {2}
            pageRangeDisplayed = {6} 
            />
        </>
    )
}

export default GamesList