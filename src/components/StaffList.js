import React from "react";
import { Link, useParams } from 'react-router-dom';
import StaffItem from './StaffItem';

const StaffList = ({staff}) => {

    const {staffId} = useParams();

    const junk = 'junk';


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