import React from 'react'
import Sticker from './Sticker'

const Product = ({product}) =>
    <div className="product">

        <Sticker product={product} />

        <div className="cart-controls">
            <button>+ Add to cart</button>
            <button>- Remove from cart</button>
        </div>

    </div>

export default Product