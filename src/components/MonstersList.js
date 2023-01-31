import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const MonstersList = ({monsters, setMonsters}) => {


    monsters.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const monsterItems = monsters.map((monster) => {
    return <div key={monster.id}>
                <h2>  {monster.name}  </h2>
            <Link to={`/monsters/${monster.id}`}>Description...</Link>
                <hr></hr>
            </div>
      });

      const fetchMonsters = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/monsters?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempMonstersData = await fetchMonsters(currentPage);
        setMonsters(tempMonstersData)
    }


  return (
        <>
            <ul className="list">{monsterItems}</ul>
            <ReactPaginate
            breakLabel="..."
            previousLabel="Previous Page"
            nextLabel="Next Page"
            onPageChange={handlePageClick}
            pageCount = {42}
            pageRangeDisplayed = {6} 
            />
        </>
    )
}

export default MonstersList