import React, { Component } from "react";

import "./app.css";
import "./index.less";
import BjImage from "images/copy.png";
import Content from "./components/content";

class App extends Component {
  render() {
    console.log("------执行");
    return (
      <div className="box1">
        my-app-test
        <span className="box2">👴笑了</span>
        <img src={BjImage} alt="" />
        <Content />
      </div>
    );
  }
}

export default App;
