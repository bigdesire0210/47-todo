// import React, { useState } from 'react'

const Item = ({ content, deleteTodo, id, changeIsDone, isDone }) => {
    // const [isDone, setIsDone] = useState(false)
    // console.log(isDone)
    // setIsDone(true) =<書き換え可能

    const handleDelete = () => {
        //削除する関数を呼ぶ
        deleteTodo(id)
    }
    return (
        <li>
            <input
                type="checkbox"
                onChange={() => {
                    changeIsDone(id)
                    // setIsDone(!isDone) // ! + 変数名　で変数に設定されている真偽値の逆の値になる
                    //変更されたタイミングでisDoneの値を書き換える処理
                    //変更する値は isDone 設定されている真偽値の逆の値
                }} />

            {/* // isDoneがtrueだったら　textDecoration: 'line-through'
            // isDoneがfalseだったら、textDecoration: 'none' */}
            <span style={
                { textDecoration: isDone ? 'line-through' : 'none' }
            }>{content}</span>
            {/* 削除ボタン作成　クリックした時に {handleDelete}　を呼び出す */}
            <button onClick={handleDelete}>削除</button>
        </li >
    )
}

export default Item
//  三項演算子
//  条件式　？　trueの時の値　：　falseの時の値