import React from "react"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import "./scroll.css"

class Scroll extends React.Component {
  constructor(props) {
    super(props);
    this.scrollViewRef = React.createRef();
    this.props.onTestRef(this);
  }
  componentDidUpdate() {
    // 组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh();
    }
  }
  componentDidMount() {
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollViewRef.current, {
        scrollX: this.props.direction === "horizontal",
        scrollY: this.props.direction === "vertical",
        // 实时派发scroll事件
        probeType: 3,
        click: this.props.click
      });
      
      if (this.props.onScroll) {
        this.bScroll.on("scroll", (scroll) => {
          this.props.onScroll(scroll);
        });
      }
      if(this.props.onClick) {
          this.scrollTo();
          // this.bScroll.scrollTo(0,-200,300,'swipe')
      }

    }
  }
  componentWillUnmount() {
    this.bScroll.off("scroll");
    this.bScroll = null;
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }
  scrollTo(scrollY) {
    if(this.bScroll) {
      console.log('调用了scrollTo');
      console.log(scrollY)
      this.bScroll.scrollTo(0, -scrollY, 300, 'swipe')
      // console.log(this.props.children.props.children[11])
      // this.bScroll.scrollToElement(this.props.children[11],300,0,0,'swipe')
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

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: false,
  onScroll: null,
  onClick: null,
  goToY: null,
  onTestRef: null,
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  // 是否启用点击
  click: PropTypes.bool,
  // 是否刷新
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  onClick: PropTypes.object,
  goToY: PropTypes.number,
  onTestRef: PropTypes.func
};

export default Scroll
