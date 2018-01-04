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
        cart.items[sku] = cart.items[sku]+1 || 1
        this.setState( { cart })
    }

    removeFromCart = (sku) => {

    }

    render () {
        return (
            <div>
                <Cart cart={this.state.cart}/>
                <ProductsList products={this.state.products}
                              handleAdd={this.addToCart}
                              handleRemove={this.removeFromCart} />
            </div>
        )
    }
}

export default Store