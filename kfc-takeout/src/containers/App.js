import React from "react"
import "./app.scss"
import {Swiper, } from '../components/index'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
     <div className="app-wrapper">
     <Swiper />
       最外层组件
     </div>
    );
  }
}

export default App