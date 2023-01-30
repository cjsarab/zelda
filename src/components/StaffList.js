import React from "react";
import { Link } from 'react-router-dom';

const StaffList = ({staff}) => {

    staff.sort(function (x,y) {

        let a = x.name.toUpperCase(),
            b = y.name.toUpperCase();
        
        return a == b ? 0 : a > b ? 1 : -1;
    })

    const staffItems = staff.map((staffItem) => {

        const slicedGame = staffItem.worked_on[0].slice(-24)

        return <div key={staffItem.id}>
                    <h2>  {staffItem.name}  </h2>
                <Link to={`/games/${slicedGame}`}>Worked on...</Link>
                <div>
                </div>
                    <hr></hr>
                </div>
          });
    
    
      return (
            <>
                <ul className="list">{staffItems}</ul>
            </>
        )

}

export default StaffList