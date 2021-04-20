import React, { Component, Fragment } from 'react'
import CardProduct from './CardProduct/CardProduct'
import { connect } from 'react-redux'
import { RootContext } from '../../Home/Home'

import './Product.css'

class Product extends Component {
    // state = {
    //     order: 4
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <p>Halaman Product</p>
                                <hr />
                                <div className="header">
                                    <div className="logo">
                                        <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="" />
                                    </div>
                                    <div className="troley">
                                        <img src="https://i.pinimg.com/originals/2b/35/a4/2b35a4763a31b6f5f40d9de9d7e05f88.jpg" alt="" />
                                        <div className="count">{value.state.totalOrder}</div>
                                    </div>
                                </div>
                                <CardProduct />
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;