import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { type, name } = this.props

    return (
        <input type={type} name={name} />
    )
  }
}

export default Input
