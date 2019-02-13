import React from "react"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import "./scroll.css"

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    this.props.onTestRef(this);
    this.BLOCKTITLEHEIGHT = 60;
    this.state = {
      rightScrollYList: [],
      currentIndex: 0,
      disableRightListen: false,
    }
  }
  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh();
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    //获取右侧导航栏的top信息
    if (this.props.children.props.className === 'product-list') {
    this.rTimer =  setTimeout(() => {
        let rightScrollYList = this.props.children.props.rightScrollYList;
        this.setState({rightScrollYList})
      }, 500)
    }
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollViewRef.current, {
        scrollX: this.props.direction === "horizontal",
        scrollY: this.props.direction === "vertical",
        // bounce: false,
        // 实时派发scroll事件
        probeType: 3,
        click: this.props.click
      });

      if (this.props.onScroll) {
        this.bScroll.on("scroll", (scroll) => {
          this.props.onScroll(scroll);
          let scrollY = -scroll.y
          let currentIndex = this.state.currentIndex
          if(this.state.rightScrollYList) {
            for (let i = 0; i < this.state.rightScrollYList.length; i++) {
              if(scrollY>this.state.rightScrollYList[i] && (this.state.rightScrollYList[i+1] ? scrollY < this.state.rightScrollYList[i+1] : true)) {
                if(i !== currentIndex) {
                  this.setState({currentIndex: i})
                  console.log(this.state.currentIndex)
                }
              }
            }
          }
        });
        this.bScroll.on("scrollEnd", (scroll) => {
          console.log('滚动结束')
          this.setState({disableRightListen: false},() => {
            console.log(this.state.disableRightListen)
          })
        })
      }

    }
  }
  componentWillUnmount() {
    this.bScroll.off("scroll");
    this.bScroll = null;
    clearTimeout(this.rTimer)
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }
  scrollTo(scrollY) {
    if (this.bScroll) {
      this.bScroll.scrollTo(0, -scrollY, 200, 'swipe')
    }
  }
  render() {
    return (
      <div className="scroll-view" ref={this.scrollViewRef}>
        {/* 获取子组件 */}
        {this.props.children}
      </div>
    );
  }
}

//Scroll 组件不支持外部写入自定义数据
Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: false,
  onScroll: null,
  onTestRef: null,
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  // 是否启用点击
  click: PropTypes.bool,
  // 是否刷新
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  onTestRef: PropTypes.func,
};

export default Scroll
