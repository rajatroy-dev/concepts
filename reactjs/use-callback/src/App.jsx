import { useCallback, useState } from "react";
import RenderList from "./RenderList";

function App() {
  const divStyle = {
    margin: "50px",
    padding: "50px",
    textAlign: "center"
  };
  const dark = {
    backgroundColor: "#000",
    color: "#fff"
  };
  const light = {
    backgroundColor: "#fff",
    color: "#000"
  }

  const [themeIsDark, setThemeIsDark] = useState(false);
  const [value, setValue] = useState(0);

  const handleTheme = () => {
    setThemeIsDark(prevState => !prevState);
  }

  const handleInput = (ev) => {
    setValue(parseInt(ev.target.value));
  }

  const threeItems = useCallback(() => {
    return [value, value + 1, value + 2];
  }, [value]);

  return (
    <div style={{ ...(themeIsDark ? dark : light), ...divStyle }}>
      <input type="number" value={value} onChange={handleInput} />
      <button style={{ margin: "0 50px", padding: "5px 10px" }} onClick={handleTheme}>Change theme</button>
      {value ? <RenderList style={{ ...divStyle, fontSize: "50px" }} threeItems={threeItems} /> : null}
    </div>
  );
}

export default App;
