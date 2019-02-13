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
    
    constructor() {
        super()
        this.leftRef = React.createRef();
        this.rightRef = React.createRef();
        this.BLOCKTITLEHEIGHT = 60;
        this.state = {
            loading: true,
            blockTitleList: [],
            leftCurrentIndex: 0, 
            refreshScroll: false,
            currentBlockTitle: null,
            leftScrollYList: []
        }

    }
    componentWillMount() {
        let windowHeight = document.body.clientHeight + 5;
        let blockTitleList = leftList.map(item => {
            return item.blockName
        })
        let currentBlockTitle = blockTitleList[0]
        this.setState({
            windowHeight,
            currentBlockTitle
        })
    }
    componentDidMount() {
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
                rightScrollYList.push(item.getBoundingClientRect().top - initRightTop + this.BLOCKTITLEHEIGHT)
        }
        console.log('获取的右侧导航栏信息(处理后)---------')
        rightScrollYList = rightScrollYList.slice(0, -1)
        rightScrollYList[0] = rightScrollYList[0] - this.BLOCKTITLEHEIGHT;
        console.log(rightScrollYList)
        this.setState({ leftScrollYList,rightScrollYList})
    }
    // 写一个函数 监听右侧滚轮信息，如果数值达到就改变leftCurrentIndex 
    onListenRightTop(lTop) {
        let leftScrollYList = this.state;
        let resKey = 0;
        for(let i = 0; i < leftScrollYList.length; i++) {
            if(lTop > leftScrollYList[i] && lTop < leftScrollYList[i+1]) {
                resKey = i;
            }
        }
        console.log('当前获得的结果key')
        console.log(resKey)
    }

    // 让右侧商品标题与currentIndex同步
    _syncBlockTitle() {
        let {leftCurrentIndex, blockTitleList, currentBlockTitle} = this.state;
        if(blockTitleList[leftCurrentIndex] !== currentBlockTitle) {
            this.setState({currentBlockTitle: blockTitleList[leftCurrentIndex]})
        }
    }
    _shiftLeft() {
        let length = this.leftRef.current.childNodes.length;
        let lastBottom = this.leftRef.current.childNodes[length - 1].getBoundingClientRect().bottom;
        let leftScollY = this.state.leftScrollYList[this.state.leftCurrentIndex]
        if (lastBottom > this.state.windowHeight) {
            this.leftChildRef.scrollTo(leftScollY);   
        }
    }
    _shiftRight() {
        console.log('右侧的top漂移-------------------');
        let rightScollY = this.state.rightScrollYList[this.state.leftCurrentIndex]
        console.log(rightScollY)
        this.rightChildRef.scrollTo(rightScollY) 
    }
    clickLeft(event) {
        //重构此方法  他的作用分离为只是获得当前元素的key，偏移等方法分离出来
        event.preventDefault()
        let leftCurrentIndex = event.currentTarget.dataset.lkey;
        let currentBlockTitle = leftList[leftCurrentIndex].blockName;
        this.setState({
            leftCurrentIndex,
            currentBlockTitle
        },() => {
            this._shiftLeft();
            this._shiftRight();
        })
    }
    render() {
        return (
            <div className='menu-wrapper'>
                <Scroll refresh={this.state.refreshScroll}
                    onTestRef={(el) => this.leftChildRef = el}
                    onClick={{}}
                    onListenRightTop
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
                        <p>{this.state.currentBlockTitle}</p>
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
