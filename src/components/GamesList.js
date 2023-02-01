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
    return <div className="item" key={game.id}>
        
            <Link className="link" to={`/games/${game.id}`}>
                <h2>  {game.name}  </h2>
            <div className="details">
            <div>   <b>Developer: </b>{game.developer}</div>
            <div>   <b>Publisher: </b>{game.publisher}</div>
            <div>   <b>Release Date: </b>{game.released_date}</div>
            </div>
            </Link>

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
        <div className="display-container">
            <ul className="list">
                    {gameItems}
            </ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {2}
            pageRangeDisplayed = {6} 
            />
        </div>
        </>
    )
}

export default GamesList