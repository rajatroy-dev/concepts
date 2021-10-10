import { useState } from "react";
import Context from "./Context";
import { ThemeContext, themes } from "./theme-context";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.dark ? themes.light : themes.dark));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Context />
    </ThemeContext.Provider>
  );
}

export default App;
