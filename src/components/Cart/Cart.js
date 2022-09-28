import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax)
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected item :{quantity}</p>
            <p>Total price:${total}</p>
            <p>Total shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <p><strong>Grand Total:${grandTotal}</strong></p>
        </div>
    );
};

export default Cart;