import React from "react";

const Card = (props) => {

    const {name, img , Workouts , time, information,movie} = props.star;
    const {handleAddToCart} = props;
  return (

    <div class="bg-white rounded-2xl overflow-hidden mb-10 pb-10 shadow-lg">
    <img className="h-2/2" src={img} alt=""/>
    <div className="p-8 sm:p-9 md:p-7 xl:p-9">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm pt-4 text-red text-slate-500 leading-relaxed mb-7">
        {information.slice(0, 80)}
      </p>
      <h5 className="text-lg font-bold">Age: {Workouts}</h5>
      <h5 className="text-sm font-bold mt-1 text-slate-600">Workouts Type:  {movie}</h5>
      <h5 className="text-md font-bold mt-2">
      Workouts Time: <span>{time}</span> min
      </h5>

 
        <button onClick={()=>handleAddToCart(props.star)} className="bg-blue-600 text-white px-16 mt-3  py-2 rounded-xl">
          <p>Add Workouts</p>
        </button>
    </div>
    </div>
  
 
    
   
   
  );
};

export default Card;
