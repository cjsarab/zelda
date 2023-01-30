import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const dungeonsList = ({dungeons, assignCurrentPage, getDungeons, setDungeons}) => {


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


    const handlePageClick = async (data) => {
        console.log(data.selected)
        assignCurrentPage(data.selected+1);

        const tempDungeonsData = await getDungeons();
        setDungeons(tempDungeonsData.data)
    }

  return (
        <>
            <ul className="list">{dungeonItems}</ul>
            <ReactPaginate
            breakLabel="..."
            previousLabel="Previous Page"
            nextLabel="Next Page"
            onPageChange={handlePageClick}
            pageCount = {10}
            pageRangeDisplayed = {5} 
            />

        </>
    )
}

export default dungeonsList