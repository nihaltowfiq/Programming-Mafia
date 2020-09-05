import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const course = cart[i];
        total = total + course.price;
    }
    return (
        <div className="cart-container">
            <div>
                <ul className="menu">
                    <li><a href="/allCourse">All Courses</a></li>
                    <li><a href="/Instructos">Instructors</a></li>
                    <li><a href="/aboutUs">About Us</a></li>
                </ul>
            </div>
            <div className="cart">
                <h1>Enrolled: {cart.length} <small>Total: ${total}</small></h1>
            </div>
        </div>
    );
};

export default Cart;