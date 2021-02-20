import {useContext, useState} from 'react'
import { store } from './Provider'
import  TodoList from './TodoList'


export default function Child() {
    const globalState = useContext(store)
    const [text, setText] = useState("")
    // console.log(globalState)
    // console.log(globalState.state)
    const todos = globalState.state.todos
    const count = globalState.state.count
    console.log(count)
    const { dispatch } = globalState
    function handleSubmit(e) {
      e.preventDefault()
      // console.log(action)
      dispatch({ type: "ADD_TODO", payload: text })
      setText("")
    }

    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
          className="newtodo"
            type="text"
            placeholder="What needs to be done?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <TodoList todos={todos} />
      </div>
    )
  }