import React from 'react'
import Notes from './Notes.jsx'
import AddRelatedForm from './AddRelatedForm.jsx'
import uuid from 'node-uuid'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={

      counter : 0

    }
  }


  increment = () => {
    this.setState ({
      counter: this.state.counter + 1
    })
  }


  render() {
    const {notes, relations} = this.state;

    return (
      <div>
        <h1>The text is here</h1>
        <br/>
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
