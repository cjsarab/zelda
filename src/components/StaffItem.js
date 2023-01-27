import React from 'react'
import { Link } from 'react-router-dom';

const StaffItem = ({staff}) => {


  return (
    <>
        <div>
            {staff.name}
        </div>
        {/* <div>
        <Link to={`/games/${game.id}`}>Description...</Link>

        </div> */}
        <div>
          
        </div>
    </>
  )
}

export default StaffItem