

function TodoList(props){
    console.log(props)
    return(
        <>
        {props.todoArray.map((item) => {
            console.log(item)
           return <h3>{item.description}</h3>
        })}
        </>
    )
}

export default TodoList