"use client"
import { useState } from "react"

export default function Todo() {
    const [todo1, setTodo1] = useState("")
    const [todos, setTodos] = useState([
        { todoItems: "todo 1", completed: false },
        { todoItems: "todo 2", completed: true },
        { todoItems: "todo 3", completed: false },
        { todoItems: "todo 4", completed: true },
    ])
    const onClickHandler = (meraelm: any) => {
        const newTodos1 = todos.map((todo) => {
            if (todo.todoItems == meraelm.todoItems) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(newTodos1)
    }
    const addTodo = () => {
        const newTodo2 = { todoItems: todo1, completed: false }
        const newTodos = [...todos, newTodo2]
        setTodos(newTodos)
        setTodo1("")
    }
    const deleteTodo = (meraTodo: any) => {
        const newTodoss = todos.filter((todo) => {
            if (todo.todoItems == meraTodo.todoItems)
             return false
            return true
        })
        setTodos(newTodoss)
    }
    return (
        <><div className="main">
            <h1 style={{fontStyle:  "oblique", 
                 fontSize: "60px" }}>TodoApp</h1><br />
            <input type="text" placeholder="Add todo text" value={todo1} onChange={(e) => setTodo1(e.target.value)} style={{ padding: "10px", width: "300px" }}></input>
            <button onClick={addTodo} style={{ padding: "10px", background: "green", borderRadius: "10px", margin: "10px" }}>Add TODO</button>
            <ul>
                {todos.map((elm) => {
                    return <li style={{
                        fontStyle: "oblique",
                        color: elm.completed ? "green" : "black",
                        fontSize: "20px",
                        marginLeft: "50px"
                    }} key={elm.todoItems}>{elm.todoItems}
                        <input type="checkbox" checked={elm.completed} onClick={() => onClickHandler(elm)}></input> 
                        <button onClick={() => deleteTodo(elm)} style={{
                           padding: "10px", background: "gray", margin: "10px", borderRadius: "5px", boxShadow: "5px 5px 5px gray"
                        }}>Delete ToDo</button>
                        </li>
                })}
            </ul>
        </div>
        </>
    )
}

