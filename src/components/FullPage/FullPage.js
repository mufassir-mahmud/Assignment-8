import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./FullPage.css";


import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Card from "../cardPage/Card";
import QuestionAndAns from "../quiestion/QuiestionAndAns";

const FullPage = () => {
    const [starInfo, setStarInfo ] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setStarInfo(data))
    },[])

    const handleAddToCart = (product) => {
       

        const newCart = [...cart, product]
        setCart(newCart)

    }



  return (
    <div className="tree">

    <div className="container-main grid md:grid-cols-4 grid-cols-1  gap-2 bg-blue-300 ">
      <div className="card-container col-span-3 ">
        <div className="logo flex">
          <FontAwesomeIcon
            className="text-blue-600 mr-5 text-5xl"
            icon={faHeart}
          ></FontAwesomeIcon>
          <h1 className="text-4xl font-bold text-blue-600 ">CrossFit Workouts</h1>
        </div>
        <h5 className="text-2xl my-8 font-bold ">Feel Great.
Body and Mind.</h5>


<div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4 gap-5 pb-20">
           
     
    {
        starInfo.map(star=> <Card id={star.id} star={star} handleAddToCart={handleAddToCart}></Card>)
    }
    </div>


    
   
   </div>
   </div>

      
          
      </div>

      <div className="info-container bg-white sticky">
     <Cart cart={cart}></Cart>
        </div>
    </div>

      <QuestionAndAns></QuestionAndAns>
    </div>
  );
};

export default FullPage;
