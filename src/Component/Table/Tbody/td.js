import React from 'react'

const Td = ({ value,id }) => {
    if(id === 0) {
        return (
            <td>
                <ul>
                    <li>{value}</li>
                </ul>
            </td>
        )
    }
    else {
        return <td>{value}</td>
    }
}

export default Td
