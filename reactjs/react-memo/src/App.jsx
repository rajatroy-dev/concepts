import { useState } from "react";

import Memoized from './Memoized';
import NonMemoized from './NonMemoized';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {/* Memoized rendered only once */}
      <Memoized />
      <NonMemoized />
    </div>
  );
}

export default App;
