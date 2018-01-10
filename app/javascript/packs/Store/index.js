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