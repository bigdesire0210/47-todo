import React from 'react'
import Item from './Item'

const List = ({ todos }) => {
    return (
        <ul>
            {/* <li>課題をする</li>
            <li>昼ごはんを作る</li>
            <Item content={'課題をする'} />
            <Item content={'お昼ご飯を作る'} /> */}

            {/* <Item content={todos[0].content} />
            <Item content={todos[1].content} />
            <Item content={todos[2].content} /> */}

            {todos.map((todo, index) => {
                return (
                    <Item key={index} content={todo.content} />
                )
            })}

        </ul>
    )
}

export default List