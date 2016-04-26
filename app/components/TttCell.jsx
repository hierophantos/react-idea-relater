import React from 'react'


export default class TttCell extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      tttBoxState : ""
    }
  }

  tttDrawPlayer = () => {
    this.setState ({
      tttBoxState : this.props.turn
    })
    console.log("Click the Next Turn Button!")
    this.props.nextTurn()
  }

  render() {
     return (
      <div
        onClick={this.tttDrawPlayer}
        style={ {width: "30px", height: "30px", border: "1px solid black",
                display: "table-cell",
                cursor:  "pointer"} } >
        {this.state.tttBoxState}
      </div>
    )

  }

}
