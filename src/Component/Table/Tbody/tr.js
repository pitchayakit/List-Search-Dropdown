import React, { Component } from 'react'
import Td from './td'

const tr = ({ columns }) => {
    const mapColumns = columns.map((column, index) => (
      <Td key={index} value={column} />
    ))
    return <tr>{mapColumns}</tr>
}

export default tr
