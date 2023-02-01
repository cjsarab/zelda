import React from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const ItemsList = ({items, setItems}) => {

    items.sort(function (x,y) {
        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })


    const itemsItems = items.map((item) => {


    return <div className='item' key={item.id}>
            <Link className='link' to={`/items/${item.id}`}>

                <h2>  {item.name}  </h2>
                
            </Link>
            </div>
      });

      const fetchItems = async (currentPage) => {
        const res = await fetch(
            `https://zelda.fanapis.com/api/items?limit=20&page=${currentPage}`
        );
        const data = await res.json();
        return data.data;
    };

    const handlePageClick = async (data) => {
        let currentPage = data.selected;
        const tempItemsData = await fetchItems(currentPage);
        setItems(tempItemsData)
    }


  return (
        <>
        <div className='display-container'>
        <ul className="list">{itemsItems}</ul>
            <ReactPaginate
            className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {94}
            pageRangeDisplayed = {6} 
            />
        </div>

        </>
    )
}

export default ItemsList