import React, { Component } from 'react'
import LeftNav from '../../components/LeftNav/LeftNav'
import Product from '../../components/Product/Product'
import './Menu.scss'

export default class Menu extends Component {
    render() {
        return (
            <div className='menu-wrapper'>
                <LeftNav className="left-nav" />
                <div className="pruduct-list">
                    <div className="product-title">
                        <span className="sprit-1">/</span>
                        <span className="sprit-2">/</span>
                        <span className="sprit-3">/</span>
                        <p>当季主打</p>
                        <span className="sprit-4">/</span>
                        <span className="sprit-5">/</span>
                        <span className="sprit-6">/</span>
                    </div>
                    <Product />
                </div>

            </div>
        )
    }
}
