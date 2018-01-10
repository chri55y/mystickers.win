import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
    // using this React Component library for our checkout button, rather than using
    // stripe checkout directly, and having to ensure ourselves that the checkout javascript
    // loads before rendering button. (which this component takes care of for us)
    //
    // ran "yarn add react-stripe-checkout" to install


const Cart = ({cart}) =>
    <div className="cart">
        Total in Cart: ${cart.total/100}
    </div>

export default Cart