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
    return <div className="item" key={dungeon.id}>
                <h2>  {dungeon.name}  </h2>
                    <Link className="link" to={`/dungeons/${dungeon.id}`}>Description...</Link>
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
        <div className='display-container'>
        <ul className="list">{dungeonItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {18}
            pageRangeDisplayed = {4} 
            />
        </div>


        </>
    )
}

export default dungeonsList