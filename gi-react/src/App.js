import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super()
        this.state = {
          person: {BasicInfo: props.info},
          people: props.people,
        }
        console.log(this.state.people)
    }
  render() {
    return (
      <div className="App">
        <p>{this.state.person.BasicInfo}</p>
        {this.state.people.map(pers => <p>{pers.BasicInfo}</p>)}
      </div>
    )
  }
}