import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super()
        this.state = {
          person: {BasicInfo: props.info}
        }
    }
  render() {
    return (
      <div className="App">
        <p>{this.state.person.BasicInfo}</p>
      </div>
    )
  }
}