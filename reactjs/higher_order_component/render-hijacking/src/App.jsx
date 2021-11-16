import { Component } from "react";

const hoc = (WrappedComponent) => {
  return class extends Component {
    render() {
      if (this.props.text)
        return <WrappedComponent data={{ "a": "apple", "b": "ball", "c": "cat" }} />
      return <WrappedComponent data={{ 1: "one", 2: "two", 3: "three" }} />
    }
  };
}

const Child = (props) => {
  return (
    <>
      {Object.keys(props.data).map((obj, i) => {
        return <p>{`${obj} : ${props.data[obj]}`}</p>
      })}
    </>
  );
}

function App() {
  const RenderHijack = hoc(Child);

  return <RenderHijack text />;
}

export default App;
