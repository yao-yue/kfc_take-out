import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
// import store from './redux/store' 

const rootReducer = function temp(a = 1, action = {type:"TEST", payload:'111'}) {
    switch (action.type) {
        case "TEST":
            return 0;
        default:
          return 0;
      }
}

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
