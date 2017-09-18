import React from 'react'
import Thead from './Thead/index'
import Tbody from './Tbody/index'

const Table = ({ columns, data }) => {

  return (
    <table>
      <Thead columns={columns} />
      <Tbody data={data} />
    </table>
  )
}

export default Table



