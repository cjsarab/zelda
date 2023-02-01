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
    return <div className="item" key={boss.id}>
                <h2>  {boss.name}  </h2>
            <Link className="link" to={`/bosses/${boss.id}`}>Description...</Link>
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
        <div className="display-container">
        <ul className="list">{bossItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {14}
            pageRangeDisplayed = {6} 
            />
        </div>

        </>
    )
}

export default bossesList