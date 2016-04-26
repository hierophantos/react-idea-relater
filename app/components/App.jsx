import React from 'react'
import TttCell from './TttCell.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      counter : 0,
      tttBoxState : ""
    }
  }


  increment = () => {
    this.setState ({
      counter: this.state.counter + 1
    })
  }

  render() {
     return (
      <div>
        <h1>The text has changed</h1>
        <br/>
        <TttCell /><TttCell /><TttCell /><br/>
        <TttCell /><TttCell /><TttCell /><br/>
        <TttCell /><TttCell /><TttCell /><br/>

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
