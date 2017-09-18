import React, { Component } from 'react'

class Button extends Component {
    shouldComponentUpdate(){ return 0 }

    render() {
        const { backButtonClick, label  } = this.props

        return <button type="button" onClick={backButtonClick}>{label}</button>
    }
}

export default Button
