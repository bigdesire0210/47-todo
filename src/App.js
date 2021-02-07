import React from 'react' // <= 絶対に必要
import Form from './Form' // 自分の場所からの相対パス
import List from './List'
import { useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([])
    // const todos = [
    //     {
    //         content: '課題をする'
    //     },
    //     {
    //         content: '料理を作る'
    //     },
    //     {
    //         content: '作った料理を食べる'
    //     },
    //     {
    //         content: '煮る'
    //     }
    // ]


    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const changeIsDone = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone,
                }
            } else {
                return todo
            }
        }))
    }

    return (
        <React.Fragment>
            <h1>TODO APP</h1>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos}
                deleteTodo={deleteTodo}
                changeIsDone={changeIsDone} />
        </React.Fragment>
    );
}

export default App 