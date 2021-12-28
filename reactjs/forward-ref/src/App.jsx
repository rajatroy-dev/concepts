import React, { useEffect } from "react";

const StyledInput = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} defaultValue={props.defaultValue} />
})

function App() {
  const forwardedRef = React.createRef();

  useEffect(() => {
    console.log(forwardedRef.current.defaultValue);
    setTimeout(() => forwardedRef.current.value = "New Value!", 5000);
  }, []);

  return (
    <StyledInput defaultValue="Default Value" ref={forwardedRef} />
  );
}

export default App;
