import React from "react";
import '../assets/css/card.css'
const Cards = (props) => {
 const changepage=()=>{
    window.location='/'
  }
  return (
    <>
      <div class="bg">

        <section class="panel">
          <h2>{props.cardTitle}</h2>
          <div class="card__text">
            <p>{props.cardDescription}</p>
            <li>Price : Rs.{props.price} /-</li>

          </div>
          <button type="button" class="btn btn-success btn-sm" onClick={changepage}> buy</button> <span>  </span>
          
        </section>

      </div>
    </>
  )
}

export default Cards;

