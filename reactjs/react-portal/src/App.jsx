import { useState } from "react";
import Child from "./Child";
import Modal from "./Modal";

function App() {
  const [click, setClick] = useState(0);
  return (
    <div onClick={() => setClick(prevState => prevState + 1)}>
      <p style={{ padding: "50px", textAlign: "center" }}>
        Concept of React portal!
        <br />
        No. of clicks: {click}
      </p>
      {/* Though Modal is rendered here inside App component but in html it outside of the div#root tag */}
      {/* But still onClick will work if we click on the button of Child component */}
      <Modal>
        <Child />
      </Modal>
    </div>
  );
}

export default App;
