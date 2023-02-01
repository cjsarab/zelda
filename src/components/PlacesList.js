import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const placesList = ({places, setPlaces}) => {


    places.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const placeItems = places.map((place) => {
    return <div className="item" key={place.id}>
            <Link className="link" to={`/places/${place.id}`}>
                <h2>  {place.name}  </h2> 
            </Link>
            </div>
      });

      const fetchPlaces = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/places?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempPlacesData = await fetchPlaces(currentPage);
        setPlaces(tempPlacesData)
    }


  return (
        <>
        <div className="display-container">
        <ul className="list">{placeItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {14}
            pageRangeDisplayed = {3} 
            />
        </div>

        </>
    )
}

export default placesList