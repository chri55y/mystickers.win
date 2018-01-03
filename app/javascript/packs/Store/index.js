import React from 'react'

class Store extends React.Component {
    render () {
        return (
            <div>
                {this.props.productsp.map(prod => {
                        return (<h2 key={prod.id}>{prod.name}</h2>)
                    }

                )}
            </div>
        )
    }
}

export default Store