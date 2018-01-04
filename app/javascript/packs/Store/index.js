import React from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

class Store extends React.Component {

    // need state to maintain cart
    constructor(props) {
        super(props)
        this.state = {
            cart: {
                items: [],
                total:  0
            }
        }
    }

    render () {
        return (
            <div>
                <Cart />
                <ProductsList products={this.props.products}/>
            </div>
        )
    }
}

export default Store