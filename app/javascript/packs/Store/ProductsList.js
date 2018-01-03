import React from 'react'

// stateless functional component
const ProductsList = (props) =>

    <div>
        {props.products.map(prod => {
            return (<h2 key={prod.id}>{prod.name}</h2>)
        })}
    </div>



export default ProductsList