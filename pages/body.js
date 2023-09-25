import React from "react";
import MyNav from "../component/navbar";
import '../assets/css/body.css';
import Button from "../component/button";
import Cards from "../component/cards";
//import Lanch from "../component/lanch";

const Body = () => {
  return (
    <>
      <MyNav />
      <div
        className={"BackgroundImage"}>

        <h1 className="content-text">Its time to recharge,  </h1>
        <h1 className="content-text">Run longer with Amaron </h1>

        <div className="explore-button">
          <Button className="explore" name="Explore" />
        </div>
      </div>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">


        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>

        </div>
  

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src='https://amaron-prod-images.s3.ap-south-1.amazonaws.com/banner/1366x470pix_2_5.jpg' class="d-block w-100" alt="image2" ></img>
          </div>
          <div class="carousel-item">
            <img src='https://amaron-prod-images.s3.ap-south-1.amazonaws.com/banner/1366x470pix_2_5.jpg' class="d-block w-100" alt="image2"></img>
          </div>
          <div class="carousel-item">

            <img src='https://amaron-prod-images.s3.ap-south-1.amazonaws.com/banner/1366x470pix_2_5.jpg' class="d-block w-100" alt="image2"></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>

      <div className="body-cards container-fluid">
        <div class="row row-cols-1 row-cols-md-4 ">
          <Cards cardTitle="Two wheelers" cardDescription="Amaron offers Pro Bike Rider (PBR) batteries, manufactured with state-of-the-art VRLA technology, for the entire range of two-wheelers available in India." price="2000" />
          <Cards cardTitle="Three wheelers" cardDescription="Amaron offers Pro Bike Rider (PBR) batteries, manufactured with state-of-the-art VRLA technology, for the entire range of two-wheelers available in India." price="4500" />
          <Cards cardTitle="Passenger vehicle" cardDescription="Amaron offers Pro Bike Rider (PBR) batteries, manufactured with state-of-the-art VRLA technology, for the entire range of two-wheelers available in India." price="7500" />
          <Cards cardTitle="For farm vehicle" cardDescription="Amaron offers Pro Bike Rider (PBR) batteries, manufactured with state-of-the-art VRLA technology, for the entire range of two-wheelers available in India." price="9500" />
        </div>
      </div>
    </>
  )
}

export default Body;