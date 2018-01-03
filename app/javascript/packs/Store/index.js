import React from 'react'
import ProductsList from './ProductsList'

class Store extends React.Component {
    render () {
        return (
            <div>
                <ProductsList products={this.props.products}/>
                {/*{this.props.products.map(prod => {*/}
                    {/*return (*/}
                        {/*<h2 key={prod.id}*/}
                            {/*// className="ch-product"*/}
                        {/*>*/}
                            {/*{prod.name}*/}
                        {/*</h2>*/}
                    {/*)*/}
                {/*})}*/}
            </div>
        )
    }
}

export default Store