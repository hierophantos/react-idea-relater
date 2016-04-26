import React from 'react'
import TttCell from './TttCell.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter : 0,
      turn : "X"
    }
  }


  increment = () => {
    this.setState ({
      counter: this.state.counter + 1
    })
  }

  nextTurn = () => {
    if (this.state.turn === "X")
      this.setState ({
        turn: "O"
      })
    else
      this.setState ({turn: "X"})
  }

  render() {
    return (
      <div>
        <h1>Play Ye Some Ticky-Taky!</h1>
        <p>Player {this.state.turn}'s turn</p>
        <button onClick={this.nextTurn} >{this.state.turn}</button>
        <br/>
        <div><TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
        </div>
        <div>
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
        </div>
        <div>
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
          <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />
        </div>
        <button
            onClick={this.increment}
        >+
        </button>
        {this.state.counter}
        <br/><br/>
      </div>
    )

  }

}
