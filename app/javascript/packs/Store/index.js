import React from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

class Store extends React.Component {

    // need state to maintain cart
    constructor(props) {
        super(props)
        this.state = {
            products:   this.props.products,
            cart: {
                items: {},
                total:  0

            }
        }
    }

    addToCart = (sku) => {
        let cart = this.state.cart
        cart.items[sku.id] = cart.items[sku.id]+1 || 1

        cart.total += sku.price
            // best practice would be to calculate totals on the server
            // but for simplicity, we'll calculate them here
        this.setState( { cart })
        // console.log(this.state.cart)
    }

    removeFromCart = (sku) => {
        let cart = this.state.cart
        if (sku.id in cart.items && cart.items[sku.id] > 0) {
            cart.items[sku.id] = cart.items[sku.id] - 1
            cart.total -= sku.price
                // best practice would be to calculate totals on the server
                // but for simplicity, we'll calculate them here
            this.setState({cart})
        }
    }

    // use a payment token from Stripe to make further calls to Stripe API
    onToken = (token) => {

    }

    render () {
        return (
            <div>
                <Cart cart={this.state.cart} onToken={this.onToken}/>
                <ProductsList products={this.state.products}
                              handleAdd={this.addToCart}
                              handleRemove={this.removeFromCart} />
            </div>
        )
    }
}

export default Store