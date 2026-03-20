import React, { use, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";
import "./FoodSection.css";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';

const FoodSection = ({ foodDataPromise }) => {
    const foodData = use(foodDataPromise);
    const foods = foodData.meals;
    const [cart, setCart] = useState([]);

    const addToCart =(foodData)=>{
        setCart([...cart, foodData])
    }
    const handleOrder = ()=>{
        if(cart.length>0){
            setCart([])
            
            toast("Order Placed!");
        }
    }

    return (
        <div className="food-container">
            <div className="food-container-left">
                {foods.map((food) => (
                    <SingleFood addToCart={addToCart} key={food.idMeal} food={food}></SingleFood>
                ))}
            </div>
            <div className="food-container-right">
                <h1>Cart</h1>
                <Cart cart={cart}></Cart>
                <button onClick={handleOrder} className="order-btn">Order</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default FoodSection;
