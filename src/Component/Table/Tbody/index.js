import React, { Component } from 'react'
import Tr from './tr'

const Tbody = ({ data }) => {
    const mapData = data.map((row, index) => (
        <Tr key={index} columns={row} />
    ))

    return (
        <tbody>
            {mapData}
        </tbody>
    )
}

export default Tbody
