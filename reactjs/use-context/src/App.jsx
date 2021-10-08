import Child from "./Child";
import user from "./user.json";
import UserContext from "./UserContext";

function Intermediate() {
  return (
    <div>
      <Child />
    </div>
  );
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Intermediate />
    </UserContext.Provider>
  );
}

export default App;
