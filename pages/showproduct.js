import React from "react";
import { useParams } from "react-router-dom";
import App from "../App";

import '../assets/css/property.css';
import Footer from "../component/footer";
import MyNav from "../component/navbar";
import ProductCard from "../component/productcard";



export const emailContext = React.createContext("email")

const Property = () => {
    let {email} = useParams()
    
    return (
        <>
        <emailContext.Provider value={email}>
        <MyNav/>
        </emailContext.Provider>
      
            <div className="App">
                <main class="col-md-9">
                    <header class="border-bottom mb-4 pb-3">
                        <div class="form-inline">
                            <select class="mr-2 form-control s1">
                                <option>UPS Battery</option>
                            </select>

                        </div>
                    </header>

                    <div class="row">
                        <ProductCard img="https://www.moxikart.com/assets/images/fairdealbattery/battery/113_Amaron%20NT650H29R.png" newp="100" oldp="2000" desc="Amaron NT-650 Gentset Battery" />
                        <ProductCard img="https://amaron36.com/wp-content/uploads/2021/03/95D31RL-min.png" newp="1500" oldp="2000" desc="Amaron highwatts Battery" />

                        <header class="border-bottom mb-4 pb-3">
                            <div class="form-inline">
                                <select class="mr-2 form-control s1">
                                    <option>Two wheeler Battery</option>
                                </select>

                            </div>
                        </header>

                        <ProductCard img="https://5.imimg.com/data5/SELLER/Default/2022/9/KH/DT/VB/41678736/new-product-500x500.png" newp="2500" oldp="4000" desc="Amaron Car Battery" />

                        <ProductCard img="https://th.bing.com/th/id/OIP.VNqvXOlQDRjpWTnfoduBWQHaHa?pid=ImgDet&w=720&h=720&rs=1.jpg" newp="8500" oldp="12000" desc="Amaron Nitro FLO battery" />

                        <ProductCard img="https://th.bing.com/th/id/OIP.BRQJEiubO-4_57jmc6O8UwHaFL?pid=ImgDet&w=500&h=350&rs=1" newp="2500" oldp="3000" desc="Amaron Tubular Battery" />

                        <header class="border-bottom mb-4 pb-3">
                            <div class="form-inline">
                                <select class="mr-2 form-control s1">
                                    <option>Two wheeler Battery</option>
                                </select>
                            </div>
                        </header>

                        <ProductCard img="https://n1.sdlcdn.com/imgs/h/n/u/AMARON-Batteries-For-Two-Wheelers-SDL992191721-2-ad959.jpg" newp="7500" oldp="8000" desc="Amaron Pro rider Battery" />

                        <ProductCard img="https://5.imimg.com/data5/PU/LU/MY-22795985/amaron-batteries-500x500.jpg" newp="6500" oldp="9000" desc="Amaron Triple turbo Battery" />

                    </div>
                </main>



            </div>

            <Footer />
        </>
    )
}

export default Property