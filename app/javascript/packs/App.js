import React from 'react'
import ReactDOM from 'react-dom'
import Store from './Store'
// knows to reference index file in this directory

class App extends React.Component {
    render() {
        return (
            <div>
                {/* pass products further down to Store component */}
                <Store productsp={this.props.products}/>
            </div>
        )
    }
}

export default App

document.addEventListener('DOMContentLoaded', () => {

    // for reading data from store-data div in index.html.erb
    const node = document.getElementById('store-data')
    const products = JSON.parse(node.getAttribute('data-products')).data

    // pass down products as props
    ReactDOM.render(<App products={products} />, document.getElementById('store'))
})