import { Component } from "react";

const setName = (name) => {
  return (WrappedComponent) => {
    return class extends Component {
      componentDidMount() {
        this.name = name;
      }

      render() {
        return <WrappedComponent name={this.name} {...this.props} />;
      }
    }
  }
}

@setName("Rajat Roy")
function App(props) {
  return (
    <p>Name: {props.name}</p>
  );
}

export default App;
