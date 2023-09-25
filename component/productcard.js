import React from "react";
import { useParams } from "react-router-dom";



const ProductCard = (props) => {
    let {email} = useParams()
    const {img,desc,newp} = props

    const onAddcart = async(e) =>{
        e.preventDefault();
        try {
            const body = { email,img,desc,newp }; 
            console.log(body)
            const response = await fetch("http://localhost:8080/addtocart", {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            alert("Added to the cart")
         
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <div class="col-md-4 r1">
                <figure class="card card-product-grid c1">
                    <div class="img-wrap">
                        <span class="badge badge-danger"> NEW </span>
                        <img src={props.img} className="i1" />
                    </div>
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <p className="p1">{props.desc}</p>
                            <div class="price-wrap mt-2">
                                <span class="price">{props.newp}</span><del class="price-old">{props.oldp}</del>

                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={onAddcart}> Add to cart </button>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default ProductCard;