import React, { Component } from 'react'
import Tr from './tr'

const Tbody = ({ data }) => {
    const mapData = data.map((row, index) => (
        <Tr key={index} row={row} />
    ))

    return (
        <tbody>
            {mapData}
        </tbody>
    )
}

export default Tbody
