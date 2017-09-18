import React from 'react'

const Td = ({ value,id }) => {
    const important = value.important ? 'important' : ''
    if(id === 0) {
        return (
            <td>
                <ul>
                    <li className={important}>{value.career}</li>
                </ul>
            </td>
        )
    }
    else {
        return <td>{value}</td>
    }
}

export default Td
