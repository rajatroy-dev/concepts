import React, { Component } from "react";

export default class ImpureReactComponent extends Component {
    constructor() {
        super();

        this.state = {
            count: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            count: 0
        });
    }

    render() {
        console.log("Impure Component!"); // this will be logged continuously. Meaning the render method is called everytime even though there is no change in state
        return (
            <>
                <p>{`Count: ${this.state.count}`}</p>
                <button onClick={this.handleClick}>Impure increase count</button>
            </>
        );
    }
}