import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const CharactersList = ({characters, setCharacters}) => {

    characters.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })


    const characterItems = characters.map((character) => {

    return <div className="item" key={character.id}>
                <h2>  {character.name}  </h2>
            <Link className="link" to={`/characters/${character.id}`}>Description... </Link>
            <div className="details">
            <div>   <b>Gender: </b>{character.gender ? character.gender : 'Unknown'}</div>
            <div>   <b>Race: </b>{character.race ? character.race : 'Unknown'}</div>

            </div>
            </div>
      });

      const fetchCharacters = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/characters?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempCharactersData = await fetchCharacters(currentPage);
        setCharacters(tempCharactersData)
    }


  return (
        <>
        <div className="display-container">
        <ul className="list">{characterItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {84}
            pageRangeDisplayed = {6} 
            />
        </div>

        </>
    )
}

export default CharactersList