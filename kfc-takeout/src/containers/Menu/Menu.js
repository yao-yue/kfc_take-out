import React, { Component } from 'react'
import Scroll from '../../components/Scroll/Scroll'
import Product from '../../components/Product/Product'
import LazyLoad, { forceCheck } from "react-lazyload";
import { Icon } from 'antd'
import './Menu.scss'
import '../../assets/style/font.css'
import '../../assets/style/line.css'

import leftList from './TempData';
import rightList from './TempData3'

export default class Menu extends Component {
    static blockTitleHeight = 60;
    constructor() {
        super()
        this.leftRef = React.createRef();
        this.rightRef = React.createRef();
        this.state = {
            loading: true,
            // rankingList: [],
            leftCurrentIndex: 0, 
            refreshScroll: false
        }

    }
    componentWillMount() {
        let windowHeight = document.body.clientHeight + 5;
        this.setState({
            windowHeight,
        })
    }
    componentDidMount() {
        console.log(rightList)
        //获取左侧导航栏的top信息
        let leftScrollYList = [];
        let initLeftTop = this.leftRef.current.childNodes[0].getBoundingClientRect().top
        for (let item of this.leftRef.current.childNodes) {
            leftScrollYList.push(item.getBoundingClientRect().top - initLeftTop)
        }
        console.log('获取的左侧导航栏信息---------')
        console.log(leftScrollYList)
        //获取右侧菜单块的top信息
        let rightScrollYList = [];
        let initRightTop = this.rightRef.current.childNodes[0].getBoundingClientRect().top
        console.log(initRightTop)
        for (let item of this.rightRef.current.childNodes) {
                rightScrollYList.push(item.getBoundingClientRect().top - initRightTop + this.blockTitleHeight)
        }
            console.log('获取的右侧导航栏信息---------')
            // console.log(this.rightRef.current.childNodes)
        // let a = rightScrollYList.pop();
        rightScrollYList = rightScrollYList.slice(0, -1)
        console.log(rightScrollYList)
        this.setState({ leftScrollYList,rightScrollYList })
    }
    clickLeft(event) {
        event.preventDefault()
        let length = this.leftRef.current.childNodes.length;
        let lastBottom = this.leftRef.current.childNodes[length - 1].getBoundingClientRect().bottom;
        // console.log(lastBottom)
        // console.log(this.state.windowHeight)
        let leftScollY = this.state.leftScrollYList[event.currentTarget.dataset.lkey]
        if (lastBottom > this.state.windowHeight) {
            this.leftChildRef.scrollTo(leftScollY);
            
        }
        console.log('----------')
        console.log(event.currentTarget.dataset.lkey);
        let leftCurrentIndex = event.currentTarget.dataset.lkey;
        this.setState({
            leftCurrentIndex
        })
        let rightScollY = this.state.rightScrollYList[leftCurrentIndex]
        console.log('右侧的top漂移-------------------');
        // console.log(this.state.rightScrollYList)
        console.log(rightScollY)
        this.rightChildRef.scrollTo(rightScollY)
        console.log(leftCurrentIndex)
    }
    render() {
        return (
            <div className='menu-wrapper'>
                <Scroll refresh={this.state.refreshScroll}
                    onTestRef={(el) => this.leftChildRef = el}
                    onClick={{}}
                    onScroll={() => { console.log('左侧导航栏调用滚动，使用forceCheck()配合懒加载'); forceCheck(); }}>
                    <div className="left-nav" ref={this.leftRef}>
                        {
                            leftList.map((item, index) => {
                                return (
                                    <li className={this.state.leftCurrentIndex!==`${index}`?'':'active-nav'} key={index} data-lkey={index}
                                        onClick={(e) => { this.clickLeft(e) }}>
                                        <LazyLoad height={100}>
                                            <img src={item.blockSrc} alt={item.blockName} />
                                        </LazyLoad>
                                        <p>{item.blockName}</p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </Scroll>
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

                    <Scroll refresh={this.state.refreshScroll}
                        onTestRef={(el) => this.rightChildRef = el}
                        onClick={{}}
                        onScroll={() => { console.log('右侧调用滚动函数，使用forceCheck()配合懒加载'); forceCheck(); }}>
                        <div className="product-list" ref={this.rightRef}>
                            {
                                rightList.map((item, index) => {
                                    return (
                                        <div className="product-block" key={index} data-rkey={index}
                                        onClick={() => {console.log('点击有效')}}>
                                            {item.blockName? <div className="block-title">{item.blockName}</div>: ''}
                                            {item.product.map((el, idx) => {
                                                return <Product productName={el.productName} productSrc={el.productImg} key={idx} />
                                            })}
                                        </div>
                                    )
                                })
                            }

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
                    </Scroll>
                </div>
            </div >
        )
    }
}
