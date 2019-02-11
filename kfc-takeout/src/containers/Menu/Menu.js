import React, { Component } from 'react'
import LeftNav from '../../components/LeftNav/LeftNav'
import Product from '../../components/Product/Product'
import { Icon } from 'antd'
import './Menu.scss'
import '../../assets/style/font.css'
import '../../assets/style/line.css'

import leftList from './TempData';

export default class Menu extends Component {
    render() {
        return (
            <div className='menu-wrapper'>
                <div className="left-nav">
                    {
                        leftList.map((item, index) => {
                            return <LeftNav key={index} blockName={item.blockName} blockSrc={item.blockSrc} />
                        })
                    }
                </div>
                <div className="pruduct-container">
                    <div className="product-title">
                        <span className="iconfont icon-xiegang"></span>
                        <span className="iconfont icon-xiegang"></span>
                        <span className="iconfont icon-xiegang"></span>
                        <p>当季主打</p>
                        <span className="iconfont icon-xiegang"></span>
                        <span className="iconfont icon-xiegang"></span>
                        <span className="iconfont icon-xiegang"></span>
                    </div>
                    <div className="product-list">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <div className="product-footer">
                            <div className="footer-tip">
                                <Icon type="notification" style={{ color: '#cb161d' }} />
                                <span>友情提示</span>
                                <div className="tip-content">
                                    肯德基宅急送不设最低起送金额，每单酌收9元外送费。为了保证食物品质，肯德基宅急送有送餐范围和服务时间限制。早餐、夜宵仅限部分肯德基宅急送送餐区域供应。肯德基宅急送实施专属菜单及价格，不同城市的送餐菜单和价格有所不同；不同城市、不同时段产品品项及价格有所不同，详情以输入送餐地址后显示的实际供应的菜单为准。西藏自治区的肯德基宅急送送餐区域与全国其他送餐区域的送餐菜单及价格有所不同，详情以输入送餐地址后显示的实际供应的菜单为准。被比较价格是指套餐内的产品在肯德基宅急送官网上同款产品的单品价（其中有会员价的产品按会员价计算）的总和，所称优惠或折扣金额均以此为计算依据。
                        </div>
                            </div>
                            <div className="footer-info tLine">
                                <div className="three-item">
                                    <span>法律条款</span>
                                    <span>经营公示</span>
                                    <span>隐私条款</span>
                                </div>
                                <div className="author-info">
                                    作者github: g00d-morning
                            </div>
                                <div className="author-say">
                                    仅供学习使用，如有侵权，请联系作者删除
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
