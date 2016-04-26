import React from 'react'

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

  tttDrawX = () => {
    this.setState ({
      tttBoxState : "x"
    })
  }

  render() {
    const {notes, relations} = this.state;

    return (
      <div>
        <h1>The text is here</h1>
        <br/>
        <div
            onClick={this.tttDrawX}
            style={ {width: "30px", height: "30px", border: "1px solid black"} } >
          {this.state.tttBoxState}
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
