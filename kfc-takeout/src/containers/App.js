import React from "react"
import "./app.scss"
import Swiper from '../components/Swiper/Swiper'
import Banner from '../components/Banner/Banner'



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
     <Banner />
     </div>
    );
  }
}

export default App