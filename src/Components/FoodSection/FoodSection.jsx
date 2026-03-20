import React, { use } from "react";
import SingleFood from "../SingleFood/SingleFood";
import "./FoodSection.css"

const FoodSection = ({ foodDataPromise }) => {
    const foodData = use(foodDataPromise);
    const foods = foodData.meals;

    return (
        <div className="food-container">
            {foods.map((food) => (
                <SingleFood key={food.idMeal} food={food}></SingleFood>
            ))}
        </div>
    );
};

export default FoodSection;
