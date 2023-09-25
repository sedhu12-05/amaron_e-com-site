import React, { useContext, useEffect, useState } from "react";

const Listmycart = (props) => {
    
    const [num, setnum] = useState(1)
    const [amount, setAmount] = useState(1)
    const { product } = props
    const price = product.newp
    const productdesc = product.desc
    var calculated = 1
    const onIncrese = () => {
        setnum(num + 1)
        calculated = num * price
        setAmount(calculated)
    }

    const onDecrease = async() => {
        setnum(num - 1)
        calculated = num * price
        await setAmount(calculated)
        
    }

 
    useEffect(() => {
        setAmount()
    }, [amount])

    const updateData = async (e) => {

        try {
            const email = 'priya@gmail.com';
            const body = { email, productdesc, num, amount };
            console.log(body)
            const response = await fetch("http://localhost:8080/buyproduct", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            alert("Successfully bought the product")
            window.location = '/'
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="col-md-4 r1" key={product._id}>
                <figure class="card card-product-grid c1">
                    <div class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>
                        <img src={product.img} className="i1" />
                    </div>
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <p className="p1">{product.desc}</p>
                            <div class="price-wrap mt-2">
                                <span class="price">{product.newp}</span>

                            </div>
                        </div>
                        <button onClick={onIncrese}> +</button> {num} <button onClick={onDecrease}> -</button> <br />
                        <button onClick={updateData}>Buy</button>
                    </figcaption>
                </figure>
            </div>
            <h1>{amount}</h1>
        </>
    )
}

export default Listmycart;