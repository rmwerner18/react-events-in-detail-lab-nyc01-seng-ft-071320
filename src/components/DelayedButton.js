// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

    clickHandler = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render() {
        return <button onClick={this.clickHandler} />
    }
}

export default DelayedButton