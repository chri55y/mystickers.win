import React from 'react'
import Sticker from './Sticker'

// converted to class to allow for handling button click logic
class Product extends React.Component {
    render() {
        return (
            <div className="product">

                <Sticker product={this.props.product} />

                <div className="cart-controls">

                    <p className="product-price">
                        ${(this.props.product.skus.data[0].price/100).toFixed(2)}
                        {/* for now, we're assuming each product has 1 SKU */}
                    </p>

                    <button>+ Add to cart</button>
                    <button>- Remove from cart</button>
                </div>

            </div>
        )
    }
}


export default Product