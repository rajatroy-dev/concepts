import { Component } from "react";

class YUNoRenderYourOwnElement extends Component {
  render() {
    const string = "I don't render my own element (⌐▨_▨) !";
    return (
      <>
        {this.props.render(string)}
      </>
    );
  }
}

function App() {
  return (
    <YUNoRenderYourOwnElement render={(data) => (<p>{`Rendered from App Component! YUNoRenderYourOwnElement says ${data}`}</p>)} />
  );
}

export default App;
