import React from 'react' // <= 絶対に必要
import Form from './Form' // 自分の場所からの相対パス
import List from './List'
import { useState } from 'react'

const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする'
        },
        {
            content: '料理を作る'
        },
        {
            content: '作った料理を食べる'
        },
        {
            content: '煮る'
        }
    ])
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
    return (
        <React.Fragment>
            <h1>TODO APP</h1>
            <Form todos={todos} setTodos={setTodos} />
            <List todos={todos} />
        </React.Fragment>
    )
}

export default App 