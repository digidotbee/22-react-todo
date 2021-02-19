import Todo from './Todo'
import StateProvider from './Provider'
import Header from './Header'


export default function TodoApp() {
    return <StateProvider>
        <Header />
        <Todo />
    </StateProvider>
}

// Provider: provides the value (state)
// action: object that describes what happened {type: 'ADD_TODO', payload: 'text'}
// reducer: takes the state and action and reduces to a new state
// store is a combination of reducers that hold state