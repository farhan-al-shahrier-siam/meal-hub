import React from 'react';
import navImg from "../../assets/food.jpg"

const Navbar = () => {
    return (
        <nav className="nav-container">
                <div className="nav-left">
                    <img src={navImg} alt="" />
                    <p>Meal Hub</p>
                </div>
                <div className="nav-right">
                    <p><a href="">Home</a></p>
                    <p><a href="">About</a></p>
                    <p><a href="">Contacts</a></p>
                    <p><a href="">Orders</a></p>
                    <p><a href="">Blogs</a></p>
                </div>
            </nav>
    );
};

export default Navbar;