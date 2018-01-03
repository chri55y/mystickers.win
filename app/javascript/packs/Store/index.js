import React from 'react'
import ProductsList from './ProductsList'

class Store extends React.Component {
    render () {
        return (
            <div>
                <ProductsList products={this.props.products}/>
            </div>
        )
    }
}

export default Store