import React, { Component } from 'react'

class Td extends Component {
  render() {
    const { value } = this.props
    return <td>{value}</td>
  }
}

export default Td
