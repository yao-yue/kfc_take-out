import React from "react"
import "./app.scss"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
     <div className="app-wrapper">
       最外层组件
     </div>
    );
  }
}

export default App