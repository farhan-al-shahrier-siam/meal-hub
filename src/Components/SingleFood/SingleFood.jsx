import React from 'react';
import "./SingleFood.css"

const SingleFood = ({food, addToCart}) => {

    return (
        <div className='food-card'>
            <img src={food.strMealThumb} alt="" />
            <h1>{food.strMeal}</h1>
            <div className='card-btn'>
                <button onClick={()=>{addToCart(food)}}>Add to cart</button>
            </div>
        </div>
    );
};

export default SingleFood;