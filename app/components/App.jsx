import React from 'react'
import _ from 'underscore'
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
    let tttCell = () => <TttCell nextTurn={this.nextTurn} turn={this.state.turn} />

    return (
      <div>
        <h1>Play Ye Some Ticky-Tacky!</h1>
        <p>Player <button >{this.state.turn}</button>'s turn!</p>
        <div>{_.times (3, () =>
          <div>
            {_.times(3, tttCell)}
          </div>
         )}
        </div>

        <hr/>
        <p>Here be a Counter:</p>
        <button
            onClick={this.increment}
        >
          +
        </button>
        {this.state.counter}
        <br/><br/>
      </div>
    )
  }
}


// TODO: Homework: make it so that you can't overwrite a play
// TODO: Check for Victory Conditions
