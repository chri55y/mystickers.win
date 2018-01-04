import React from 'react'

const Product = ({product}) =>
    <div>
        <h2>{product.name}</h2>
        <p>5-Pack for $5</p>
        <h3>{product.caption}</h3>
        <div class="sticker">
            <img src={product.images[0]} alt={product.name} />
        </div>
        <h3>Free shipping!</h3>
    </div>

export default Product