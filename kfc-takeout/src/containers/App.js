import React from "react"

import style from "./App.scss"



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
     <div style={style.wrapper}>
       最外层组件
     </div>
    );
  }
}

export default App