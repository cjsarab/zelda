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
    return <div className="item" key={monster.id}>
        <Link className="link" to={`/monsters/${monster.id}`}>
                <h2>  {monster.name}  </h2>
            </Link>
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
        <div className='display-container'>
        <ul className="list">{monsterItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {42}
            pageRangeDisplayed = {5} 
            />
        </div>

        </>
    )
}

export default MonstersList