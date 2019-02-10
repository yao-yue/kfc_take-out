import React, { Component } from 'react'
import './Banner.scss'

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="banner-item"><img src="assets/image/Banner_clock" alt="预约送餐"/><span>预约送餐</span></div>
        <div className="banner-item"><img src="" alt=""/><span></span></div>
        <div className="banner-item"><img src="" alt=""/><span></span></div>
      </div>
    )
  }
}
