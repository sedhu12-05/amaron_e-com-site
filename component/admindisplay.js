import React from "react";

const Admindisplay = (props) => {
    const {mystudentdata} = props
 
    return (
        <>
            <tr>
                <td>{mystudentdata.email}</td>
                <td>{mystudentdata.productdesc}</td>
                <td>{mystudentdata.num}</td>
                <td>{mystudentdata.amount}</td>
               
              
            </tr>   
        </>
    )
}

export default Admindisplay