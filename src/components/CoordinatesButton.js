// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {
    clickHandler = (event) => {
        return this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return <button onClick={this.clickHandler} />
    }
}

export default CoordinatesButton