import React from "react"
import "./app.scss"
import Swiper from '../components/Swiper/Swiper'
import Banner from '../components/Banner/Banner'
import LeftNav from '../components/LeftNav/LeftNav'



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
     <LeftNav/>
     </div>
    );
  }
}

export default App