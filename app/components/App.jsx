import React from 'react'
import Notes from './Notes.jsx'
import AddRelatedForm from './AddRelatedForm.jsx'
import uuid from 'node-uuid'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={

      notes : [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ],
      relations : [],

      counter : 0

    }
  }


  editNote = (id, value) => {
    const notes = this.state.notes.map( (note) => {
      if (note.id === id)
        note.task = value
      return note
    })


    this.setState({notes})

    //this.setState({
    //        notes: newNotes
    //    })
  }

  addRelation = (sourceId, targetId) => {
    if(sourceId === targetId) {
      console.error("reflexive relation attempt!", sourceId)
      return false
    }

    this.setState({
      relations: this.state.relations.concat(
        [{
          id: uuid.v4(),
          sourceId: sourceId,
          targetId: targetId,
          label: ''
        },
         {
           id: uuid.v4(),
           sourceId: targetId,
           targetId: sourceId,
           label: ''
         }]
      )
    })

  }

  addNote = (text = "New task") => {
    const id = uuid.v4();
    this.setState({
      notes: this.state.notes.concat(
        [
          {
            id,
            task: text
          }
        ])
    });

    return id;
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
        >^
        </button>
        {this.state.counter}
        <br/><br/>
        <button onClick={() => this.addNote()}>+</button>
        <Notes
            addRelation={this.addRelation}
            addNote={this.addNote}
            onEdit={this.editNote}
            notes={notes}
            relations={relations}
        />
        <pre>{JSON.stringify(this.state.relations, null, '\t')}</pre>
      </div>
    )

  }

}
