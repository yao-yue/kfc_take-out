import React, { Component } from 'react'
import LeftNav from '../../components/LeftNav/LeftNav'
import Product from '../../components/Product/Product'
import './Menu.scss'
// import './iconfont.css'
import '../../assets/style/font.css'
// require('./iconfont.js')

export default class Menu extends Component {
    render() {
        return (
            <div className='menu-wrapper'>
                <LeftNav className="left-nav" />
                <div className="pruduct-list">
                    <div className="product-title">
                    <span className="iconfont icon-xiegang"></span>
                    <span className="iconfont icon-xiegang"></span>
                    <span className="iconfont icon-xiegang"></span>
                    <p>当季主打</p>
                    <span className="iconfont icon-xiegang"></span>
                    <span className="iconfont icon-xiegang"></span>
                    <span className="iconfont icon-xiegang"></span>
                 </div>
                <Product />
            </div>

            </div >
        )
    }
}
