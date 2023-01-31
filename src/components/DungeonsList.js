import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const dungeonsList = ({dungeons, setDungeons}) => {


    dungeons.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const dungeonItems = dungeons.map((dungeon) => {
    return <div key={dungeon.id}>
                <h2>  {dungeon.name}  </h2>
                    <Link to={`/dungeons/${dungeon.id}`}>Description...</Link>
                <hr></hr>
            </div>
      });

    const fetchDungeons = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/dungeons?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempDungeonsData = await fetchDungeons(currentPage);
        setDungeons(tempDungeonsData)
    }

  return (
        <>
            <ul className="list">{dungeonItems}</ul>
            <ReactPaginate
            breakLabel="..."
            previousLabel="Previous Page"
            nextLabel="Next Page"
            onPageChange={handlePageClick}
            pageCount = {18}
            pageRangeDisplayed = {6} 
            />

        </>
    )
}

export default dungeonsList