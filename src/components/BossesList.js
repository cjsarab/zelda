import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const bossesList = ({bosses, setBosses}) => {


    bosses.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const bossItems = bosses.map((boss) => {
    return <div key={boss.id}>
                <h2>  {boss.name}  </h2>
            <Link to={`/bosses/${boss.id}`}>Description...</Link>

                <hr></hr>
            </div>
      });

      const fetchBosses = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/bosses?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempBossesData = await fetchBosses(currentPage);
        setBosses(tempBossesData)
    }


  return (
        <>
            <ul className="list">{bossItems}</ul>
            <ReactPaginate
            breakLabel="..."
            previousLabel="Previous Page"
            nextLabel="Next Page"
            onPageChange={handlePageClick}
            pageCount = {14}
            pageRangeDisplayed = {6} 
            />
        </>
    )
}

export default bossesList