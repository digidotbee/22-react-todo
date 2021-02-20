import { store } from './Provider'
import { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'

function TodoList(props) {
  const globalState = useContext(store)
  const { dispatch } = globalState

  function removeTodo(id) {
    dispatch({ type: "REMOVE_TODO", payload: id })
  }

  function completeTask(id) {
    dispatch({ type: "CHECKED", payload: id })
  }
  return (
    <div className="todoList">
      {props.todos.map((todo) => (
        <span key={todo.id} className={todo.isComplete ? "listItemChecked" : "listItem"}>
          <div className="newtodo">
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => completeTask(todo.id)}
            ></input>{" "}
            {todo.description}
          <FaTimes style={{ color: 'rgb(200, 190, 190)', cursor: 'pointer'}} 
                onClick={() => removeTodo(todo.id)}
                />
          </div>
        </span>
      ))}
    </div>
  )
}

export default TodoList