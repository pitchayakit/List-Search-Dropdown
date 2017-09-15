import React, { Component } from 'react'
import Tr from './tr'

class Table extends Component {
  render() {
    const { columns, data } = this.props
    const mapData = data.map((row, index) => (
      <Tr key={index} columns={row} />
    ))

    return (
      <table>
        <thead>
          <Tr columns={columns} />
        </thead>
        <tbody>
          {mapData}
        </tbody>
      </table>
    )
  }
}

export default Table
