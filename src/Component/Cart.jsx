import React from 'react';

export default function Cart ({quantity = 0, hadleBasketShow=Function.prototype}){

    return(
        <div className='cart  grey darken-2 white-text' onClick={hadleBasketShow}>
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quanity'>{quantity}</span>) : null
            }
        </div>
    )

}