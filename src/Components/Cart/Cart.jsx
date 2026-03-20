import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            {
                cart.map(name => <h2 key={name.idMeal}>{name.strMeal}</h2>)
            }
        </div>
    );
};

export default Cart;