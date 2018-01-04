import React from 'react'

const Cart = ({cart}) =>
    <div className="cart">
        Total in Cart: ${cart.total/100}
    </div>

export default Cart