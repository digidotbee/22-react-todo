import { useContext, useState } from 'react'
import StateProvider, { store } from './Provider'
import TodoList from './TodoList'


function Todo() {
    const [text, setText] = useState('')
    // console.log(globalState)
    // console.log(globalState.state)

    //this line sets the state of my todos
    const globalState = useContext(store)
    const todos = globalState.state.todos
    //

    const count = globalState.state.count
    const { dispatch } = globalState;

    function handleSubmit(e) {
        e.preventDefault()
        // const action = {type: 'ADD_TODO', payload: text}
        // console.log(action)
        dispatch({type: 'INCREMENT'})
        // dispatch({type: 'DECREMENT'})
        dispatch({type: 'ADD_TODO', payload: text})
        setText('')
    }
    return (
        <div className="newtodo">
            {count}
            {text}
            <button onClick={() => dispatch({type: 'DECREMENT'})}hello></button>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </form>
            <ul>
                {/* "todos" below is my todos state */}
                <TodoList todoArray={todos}></TodoList>
            </ul>
        </div>
    )
}
export default Todo