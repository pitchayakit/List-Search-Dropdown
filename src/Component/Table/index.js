import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { type, name } = this.props

    return (
        <input type={type} name={name} />
    )
  }
}

export default Input
