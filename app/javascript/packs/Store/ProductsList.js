import React from 'react'
import Product from './Product'


const ProductsList = ({products, handleAdd, handleRemove}) =>
    <div>
        {products.map(prod => {
            // console.log(prod)
            // return (<h2 key={prod.id}>{prod.name}</h2>)
            return(<Product key={prod.id} product={prod}
                            handleAdd={handleAdd} handleRemove={handleRemove}
                    />)
        })}
    </div>


export default ProductsList