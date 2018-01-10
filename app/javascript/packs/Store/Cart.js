import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
    // using this React Component library for our checkout button, rather than using
    // stripe checkout directly, and having to ensure ourselves that the checkout javascript
    // loads before rendering button. (which this component takes care of for us)
    //
    // ran "yarn add react-stripe-checkout" to install


                    // function passed from Store (index.js)
const Cart = ({cart, onToken}) =>
    <div className="cart">
        Total in Cart: ${cart.total/100}
        { cart.total > 0 &&
            <StripeCheckout
                token={onToken}
                stripeKey="pk_test_2zExv5yMl5kGjgnufMAb28Wt"
                description="Stickers from mystickers.win"
                amount={cart.total}
                label="Checkout"
                billingAddress={true}
                shippingAddress={true}
            />
        }
    </div>

export default Cart