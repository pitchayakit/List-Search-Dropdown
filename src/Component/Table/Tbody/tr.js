import React from 'react'
import Td from './td'

const tr = ({ row }) => {
  const renderItem = (row, index) => <Td key={index} value={row} id={index}/>
    // const mapColumns = row.map((row, index) => (
    //   <Td key={index} value={row} id={index}/>
    // ))
    return <tr>{row.map(renderItem)}</tr>
}

export default tr
