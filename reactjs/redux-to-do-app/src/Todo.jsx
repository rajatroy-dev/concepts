export default function Todo(props) {
    return (
        <div>
            <p style={props.todo.completed ? { textDecoration: "line-through" } : null}>{props.todo.value}</p>
            <button onClick={props.toggleTodo} style={{ margin: "10px" }}>Toggle</button>
            <button onClick={props.deleteTodo} style={{ margin: "10px" }}>Delete</button>
        </div>
    );
}