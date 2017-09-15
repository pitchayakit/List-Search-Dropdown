import React, { Component } from 'react'
import Tr from './tr'

const Table = ({ columns, data }) => {
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

export default Table



