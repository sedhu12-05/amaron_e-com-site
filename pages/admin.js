import React, { useEffect, useState } from "react";
import Admindisplay from "../component/admindisplay";

const Admin = () => {
    const [products, setProducts] = useState([]);

    const getproducts = async (e) => {

        try {

            const res = await fetch("http://localhost:8080/admindisplay");
            const jsonData = await res.json();
            setProducts(jsonData)
            console.log(jsonData)
        } catch {
            console.error("error")
        }
    }
    useEffect(()=>{
        getproducts()
    },[]);
    return (
        <>
            <div>
                <table class="table table-striped" style={{ width: "110%", margin: "0" }}>
                    <tr>
                        <th>Email</th>
                        <th>Description</th>
                        <th>Number of products</th>
                        <th>Price</th>
                    </tr>
                    {products.map(product => (
                        <Admindisplay mystudentdata={product} key={product._id} />)
                    )}
                </table>
            </div>+
           

        </>
    )
}

export default Admin;