import React, { Component } from 'react'
import { Carousel } from 'antd'
import ProgressDot from '../ProgressDot/ProgressDot'


const swiperList = ['http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_cb8d8d64ca2443b8a9739aea05886268.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_26994272adab4819825129a63552180f.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_88a42afad1c94b8c9b23a94d86d9a502.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_0aaadc9e1ac744c0813b8aa96e0f348e.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_405c64da08df4eb8afe2f73075ee4760.jpg',
  'http://resm.4008823823.com.cn/kfcmwos/img/Banner_1_3d45583fd05640c8bc64387d08b19199.jpg']

export default class Swiper extends Component {
  constructor() {
    super();
    this.state ={
      currentIndex: 0,
      length: 0,
    }
  }
  componentWillMount() {
    let length = swiperList.length;
    this.setState({
      length,
    })
  }
  render() {
    return (
      <div className="swiper-container">
        <Carousel autoplay 
        dots={false}
        beforeChange={() => {
          let currIndexLast = this.state.currentIndex;
          let currentIndex = (currIndexLast+1) % this.state.length
          this.setState({
            currentIndex,
          })
        }}
        >
        {swiperList.map((item,index) => {
          return <div key={index}><img src={item} alt={index} style={{background: "cover",height: '100%', width: '100%'}}/></div>
        })}
        </Carousel>
        <ProgressDot length={swiperList.length} currIndex={this.state.currentIndex}/>
      </div>
    )
  }
}
