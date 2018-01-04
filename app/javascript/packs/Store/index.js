import React from 'react'
import ProductsList from './ProductsList'
import Cart from './Cart'

class Store extends React.Component {
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