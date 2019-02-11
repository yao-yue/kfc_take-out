import React, { Component } from 'react'
import './LeftNav.scss'

export default class LeftNav extends Component {
  render() {
    return (
      <ul className="leftNav-wrapper">
        <li className="active-nav" >
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2018_01_12_11_21_19.png" alt="当季主打"/>
            <p>当季主打</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2017_12_20_17_23_57.png" alt="桶"/>
            <p>桶</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2017_12_20_17_18_39.png" alt="帕尼尼"/>
            <p>美味汉堡/卷</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2017_12_20_18_08_37.png" alt="帕尼尼"/>
            <p>人气明星餐</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2019_01_24_16_47_56.png" alt="帕尼尼"/>
            <p>炸鸡啤酒</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2018_07_06_15_06_41.png" alt="帕尼尼"/>
            <p>帕尼尼</p>
        </li>
        <li>
            <img src="https://resm.4008823823.com.cn/kfcmwos/img/iclasscn13_2018_07_06_15_06_41.png" alt="帕尼尼"/>
            <p>帕尼尼</p>
        </li>
      </ul>
    )
  }
}
