import React, { Component } from 'react'
import './Product.scss'
import { Icon } from 'antd'
import LazyLoad from "react-lazyload";

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="product-wrapper">
        <LazyLoad height={100}>
          <img src={this.props.productSrc} alt={this.props.productName}/>
        </LazyLoad>
        <div className="pruduct-desc">
        <p>{this.props.productName}</p>
        <div className="K-money"><p>￥</p><span>138.0</span></div>
        <div className="handle-btn"><Icon type="plus" /></div>
        </div>
      </div>
    )
  }
}
