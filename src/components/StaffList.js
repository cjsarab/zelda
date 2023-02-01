import React from "react";
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

const StaffList = ({staff, setStaff}) => {

    staff.sort(function (x,y) {

        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const staffItems = staff.map((staffItem) => {

        const slicedGame = staffItem.worked_on[0].slice(-24)

        return <div className="item" key={staffItem.id}>
                    <h2>  {staffItem.name}  </h2>
                <Link className="link" to={`/games/${slicedGame}`}>Worked on...</Link>
                <div>
                </div>
                </div>
          });

          const fetchStaff = async (currentPage) => {
            const res = await fetch(
                `https://zelda.fanapis.com/api/staff?limit=20&page=${currentPage}`
            );
            const data = await res.json();
            return data.data;
        };
    
        const handlePageClick = async (data) => {
            let currentPage = data.selected;
            const tempStaffData = await fetchStaff(currentPage);
            setStaff(tempStaffData)
        }
    
    
      return (
            <>
            <div className="display-container">
            <ul className="list">{staffItems}</ul>
                <ReactPaginate
                className={"pagination"}
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount = {13}
            pageRangeDisplayed = {3} 
            />
            </div>

            </>
        )

}

export default StaffList