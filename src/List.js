import React from 'react'
import Item from './Item'

const List = ({ todos, deleteTodo, changeIsDone, }) => {
    return (
        <ul>

            {/* <Item content={todos[0].content} />
            <Item content={todos[1].content} />
            <Item content={todos[2].content} /> */}

            {todos.map((todo) => {
                return (
                    <Item key={todo.id}
                        deleteTodo={deleteTodo}
                        content={todo.content}
                        id={todo.id}
                        changeIsDone={changeIsDone}
                        isDone={todo.isDone} />
                )
            })}

        </ul>
    )
}

export default List