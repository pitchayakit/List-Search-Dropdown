import React from 'react'
import Tr from './tr'

const Thead = ({ columns }) => {

  return (
      <thead>
        <Tr columns={columns} />
      </thead>
  )
}

export default Thead
