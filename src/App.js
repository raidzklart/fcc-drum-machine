import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  padClicked(id) {
    console.log(id);
  }
  render() {
    return (
      <div id="drum-machine" className="main">
        <div id="display">
          <h1>Hello</h1>
        </div>
        <div className="pads">
          <button id="Q" className="drum-pad" onClick={() => { this.padClicked('Q') }}>Q</button>
          <button id="W" className="drum-pad" onClick={() => { this.padClicked('W') }}>W</button>
          <button id="E" className="drum-pad" onClick={() => { this.padClicked('E') }}>E</button>
          <button id="A" className="drum-pad" onClick={() => { this.padClicked('A') }}>A</button>
          <button id="S" className="drum-pad" onClick={() => { this.padClicked('S') }}>S</button>
          <button id="D" className="drum-pad" onClick={() => { this.padClicked('D') }}>D</button>
          <button id="Z" className="drum-pad" onClick={() => { this.padClicked('Z') }}>Z</button>
          <button id="X" className="drum-pad" onClick={() => { this.padClicked('X') }}>X</button>
          <button id="C" className="drum-pad" onClick={() => { this.padClicked('C') }}>C</button>
        </div>
      </div>
    )
  }
}


