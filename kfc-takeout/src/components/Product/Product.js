import React, { Component } from 'react'
import './Product.scss'
import { Icon } from 'antd'

export default class Product extends Component {
  render() {
    return (
      <div className="product-wrapper">
        <img src="" alt=""/>
        <div className="pruduct-info">
        <div className="icon-RMB">￥</div>
        <p>荷包满满</p>
        <span>138.0</span>
        <div className="handle-btn"><Icon type="plus" /></div>
        </div>
      </div>
    )
  }
}
