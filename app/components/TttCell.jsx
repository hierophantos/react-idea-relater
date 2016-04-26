import React from 'react'

export default class TttCell extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      tttBoxState : "_"
    }
  }

  tttDrawX = () => {
    this.setState ({
      tttBoxState : "X"
    })
  }

  render() {
     return (
      <div
        onClick={this.tttDrawX}
       style={ {width: "30px", height: "30px", border: "1px solid black",
                display: "inline-block"} } >
        {this.state.tttBoxState}
      </div>
    )

  }

}
