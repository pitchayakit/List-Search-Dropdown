import React from 'react'
import Th from './th'

const tr = ({ columns }) => {
    const mapColumns = columns.map((column, index) => (
      <Th key={index} value={column} />
    ))
    return <tr>{mapColumns}</tr>
}

export default tr
