import React, { Component } from 'react'
import './LeftNav.scss'


export default class LeftNav extends Component {
  // constructor() {
  //   super()
  // }
  render() {
    return (
        <li className="active-nav">
            <img src={this.props.blockSrc} alt={this.props.blockName}/>
            <p>{this.props.blockName}</p>
        </li>

    )
  }
}
