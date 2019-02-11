import React, { Component } from 'react'
import './Product.scss'
import { Icon } from 'antd'

export default class Product extends Component {
  render() {
    return (
      <div className="product-wrapper">
        <img src="https://resm.4008823823.com.cn/kfcmwos/img//S/577_521305.jpg" alt="静态资源"/>
        <div className="pruduct-desc">
        <p>荷包满满</p>
        <div className="K-money"><p>￥</p><span>138.0</span></div>
        <div className="handle-btn"><Icon type="plus" /></div>
        </div>
      </div>
    )
  }
}
