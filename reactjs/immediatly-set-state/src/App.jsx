import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleAsyncCount = this.handleAsyncCount.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  handleAsyncCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    console.log(this.state.count); // Increments by 1
  }

  handleCount() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));

    console.log(this.state.count); // Increments by 3
  }

  render() {
    return (
      <>
        <div>
          <span style={{ marginRight: "20px" }}>{this.state.count}</span>
          <button onClick={this.handleAsyncCount}>Async Count Increment</button>
        </div>
        <div>
          <span style={{ marginRight: "20px" }}>{this.state.count}</span>
          <button onClick={this.handleCount}>Count Increment</button>
        </div>
      </>
    );
  }
}

export default App;
