import { useMemo, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [value, setValue] = useState(0);

  const theme = {
    backgroundColor: isDark ? "#000" : "#fff",
    color: isDark ? "#fff" : "#000"
  };

  const handleTheme = () => {
    setIsDark(prevState => !prevState);
  }

  const handleInput = (ev) => {
    setValue(parseInt(ev.target.value));
  }

  const slowFunction = (input) => {
    for (let i = 0; i < 1000000000; i++) { }
    return input * 3;
  }

  const thrice = useMemo(() => slowFunction(value), [value]);

  return (
    <div style={{ padding: "50px", margin: "50px", ...theme, textAlign: "center" }}>
      <input type="number" value={value} onChange={handleInput} />
      <button style={{ margin: "0 50px", padding: "5px 10px" }} onClick={handleTheme}>Change Theme</button>
      {thrice ? <p style={{ padding: "50px", margin: "50px", fontSize: "25px" }}>{thrice}</p> : null}
    </div>
  );
}

export default App;
