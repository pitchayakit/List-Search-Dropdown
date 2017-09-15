import React, { Component } from 'react'
import Td from './td'

class tr extends Component {
  render() {
    const { columns } = this.props 
    let mapColumns = columns.map((column, index) => (
      <Td key={index} value={column} />
    ))

    return (
        <tr>
          {mapColumns}   
        </tr>
    )
  }
}

export default tr
