import React, {  useContext, useState } from "react";

import Listmycart from "../component/listmycart";
import MyNav from "../component/navbar";
import { emailContext } from "./showproduct";

const MyCart = () =>{
    const [products, setProducts] = useState([]);
    // const email = useContext(emailContext)
    const email = "priya@gmail.com"
    console.log(email)
    const getproducts = async (e) => {

        e.preventDefault();
        try {
            const body = { email };
            console.log(body);
            const res = await fetch("http://localhost:8080/displaycart", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const jsonData = await res.json();
            setProducts(jsonData)
        }catch{
            console.error("error")
        }
    }
    
  
    return(
        <>
        <MyNav/>
         <button onClick={getproducts}>find</button>
                <div>
                    <section class="section-50">
                        {products.map((product )=> (
                            <Listmycart product={product} />)
                        )}
                    </section>
                </div>
      
        </>
    )
}

export default MyCart;