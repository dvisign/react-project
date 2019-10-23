import React, { Component } from 'react'

export class Costomer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

export default Costomer
