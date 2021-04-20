import React, { Component } from 'react'
import Counter from './Counter'

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQEdkSqLVc7Krg/company-logo_200_200/0/1588649985065?e=2159024400&v=beta&t=JEDb1GutyJziqJyP2QNx95P25vuRlSOXFVWdBGonDrE" alt="" />
                </div>
                <p className="product-title">Daging Ayam Bumbu Kari Spesial</p>
                <p className="product-price">Rp. 40.000</p>
                <Counter />
            </div>
        )
    }
}

export default CardProduct