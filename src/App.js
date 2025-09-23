import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light"
    }
  }

  toggleMode = () => {
    this.setState({ mode: this.state.mode === "light" ? "dark" : "light" });
    document.body.className = this.state.mode === "light" ? "dark-mode" : "light-mode";
  }

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <News mode={this.state.mode} title="myTitle" discription="myDiscription" />
      </div>
    )
  }
}
