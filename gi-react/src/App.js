import './App.css';

import React, { Component } from 'react'

export default class app extends Component {
    constructor(props){
        super()
        this.state = {
          person: {}
        }
    }
  render() {
    return (
      <div className="App">
        <p>My name is Victor, I am 19 years old, and I am from El Salvador</p>
      </div>
    )
  }
}