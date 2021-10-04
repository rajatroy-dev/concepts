import React, { PureComponent } from "react";

export default class PureReactComponent extends PureComponent {
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
        console.log("Pure Component!");
        return (
            <>
                <p>{`Count: ${this.state.count}`}</p>
                <button onClick={this.handleClick}>Pure increase count</button>
            </>
        );
    }
}