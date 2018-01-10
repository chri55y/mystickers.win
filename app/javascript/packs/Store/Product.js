import React from 'react'
import Sticker from './Sticker'

// converted to class to allow for handling button click logic
class Product extends React.Component {

    handleCartAdd = () => {
        this.props.handleAdd(this.props.product.skus.data[0])
    }

    handleCartRemove = () => {
        this.props.handleRemove(this.props.product.skus.data[0])
    }

    render() {
        return (
            <div className="product">

                <Sticker product={this.props.product} />

                <div className="cart-controls">
                    <p className="product-price">
                        ${(this.props.product.skus.data[0].price/100).toFixed(2)}
                        {/* for now, we're assuming each product has 1 SKU */}
                    </p>
                    <button onClick={this.handleCartAdd}>+ Add to cart</button>
                    <button onClick={this.handleCartRemove}>- Remove from cart</button>
                </div>

            </div>
        )
    }
}


export default Product