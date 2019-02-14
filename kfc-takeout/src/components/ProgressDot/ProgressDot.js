
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//presentaion 表现型组件

const dotStyle = {
    height: '0.06rem',
    width: '0.16rem',
    backgroundColor: '#ffffff',
    margin: '0 0.04rem 0.03rem',
    borderRadius: '0.03rem',    
}
const dotActiveStyle = {
  height: '0.12rem',
  width: '0.12rem',
  backgroundColor: 'transparent',
  borderRadius: '0.06rem',
  margin: '0.04rem 0.04rem 0',
  border: '0.02rem solid #ffffff'
}
const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  position: 'absolute',
  top: '2.7rem',
  left: '0',
  right: '0',
  bottom: '0',
  margin: '0 auto',
  height: '0.4rem',
  width: '5rem',
  // backgroundColor: 'black',
  paddingBottom: '0.2rem',
}


export default class ProgressDot extends Component {
  static propTypes = {
    currIndex: PropTypes.number,
    length: PropTypes.number
  }
  constructor(props) {
    super(props)
    this.state = {
      currIndex: 0,
    }
  }
  render() {
    let list = (length) => {
      let list = [];
      for(let i = 0; i< length; i++) {
        list.push(
          <div className="dot" key={i} style={this.props.currIndex===i?dotActiveStyle:dotStyle}></div>
        )
      }
      return list;
    }
    return (
      <div className="progress-wrapper" style={wrapperStyle}>
        {
          list(this.props.length)
        }
      </div>
    )
  }
}
