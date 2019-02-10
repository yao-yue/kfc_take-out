import React, { Component } from 'react'
import clock from '../../assets/image/Banner_clock.png'
import humbag from '../../assets/image/Banner_humbag.png'
import coffee from '../../assets/image/Banner_coffee.png'
import './Banner.scss'
import '../../assets/style/line.css'

export default class Banner extends Component {
  render() {
    return (
        <div className="banner-container bLine">
          <div className="banner-item"><img src={clock} alt="预约送餐" /><span>预约送餐</span></div>
          <div className="banner-item"><img src={humbag} alt="团享餐" /><span>团享餐</span></div>
          <div className="banner-item"><img src={coffee} alt="K-Coffe" /><span>K COFFEE</span></div>
          <div className="banner-circle"></div>
        </div>
    )
  }
}
