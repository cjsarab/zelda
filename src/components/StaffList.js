import React from "react";
import StaffItem from './StaffItem';

const StaffList = ({staff}) => {

    const staffItems = staff.map((staff, index) => {
        return <StaffItem staff={staff} key={index} />
    })



    return (

        <>
            <div>
                {staffItems}
            </div>
        </>
    )

}

export default StaffList