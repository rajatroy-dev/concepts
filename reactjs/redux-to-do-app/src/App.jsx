import { useState } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

function App(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.addToDo({
      todo: {
        id: Date.now(),
        value: value,
        completed: false
      }
    });
    setValue("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} />
      </form>
      <div>
        {props.todos && props.todos.map(item => {
          return <Todo key={item.id} todo={item} toggleTodo={() => props.toggleTodo({ id: item.id })} deleteTodo={() => props.deleteTodo({ id: item.id })} />;
        })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (payload) => dispatch({ type: "ADD_TODO", payload }),
    toggleTodo: (payload) => dispatch({ type: "TOGGLE_TODO", payload }),
    deleteTodo: (payload) => dispatch({ type: "DELETE_TODO", payload })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
