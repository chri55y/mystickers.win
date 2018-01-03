import React from 'react'

class Store extends React.Component {
    render () {
        return (
            <div>
                {this.props.products.map(prod => {
                    return (
                        <h2 key={prod.id}
                            // className="ch-product"
                        >
                            {prod.name}
                        </h2>
                    )
                })}
            </div>
        )
    }
}

export default Store