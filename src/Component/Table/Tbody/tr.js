import React, { Component } from 'react'
import Td from './td'

const tr = ({ row }) => {
    const mapColumns = row.map((row, index) => (
      <Td key={index} value={row} id={index}/>
    ))
    return <tr>{mapColumns}</tr>
}

export default tr
