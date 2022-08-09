import { useState } from 'react';
import { connect } from "react-redux";
import { addTodo } from './actions/addTodo';
import { deleteTodo } from './actions/deleteTodo';
import { updateTodo } from './actions/updateTodo';
import Todo from './Todo';

function App(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    props.onAddTodo({
      title: value,
    });
    setValue("");
  }
  return (
    <>
      {props.error && <div style={{ color: 'red' }}>API Error!</div>}
      {props.loading && <p>Loading . . .</p>}
      {!props.loading &&
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={(ev) => setValue(ev.target.value)} />
          </form>
          <div>
            {props.todos && props.todos.map(item => {
              return <Todo key={item.id} todo={item} toggleTodo={() => props.toggleTodo(item)} deleteTodo={() => props.deleteTodo(item)} />;
            })}
          </div>
        </>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    loading: state.loading,
    error: state.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: todo => dispatch(addTodo(todo)),
    toggleTodo: todo => dispatch(updateTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);