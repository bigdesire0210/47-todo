import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Form = ({ todos, setTodos, }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        // console.log('Form submitted')
        //formの内容をtodoの配列に追加する処理をかく
        e.preventDefault()

        //     if (value === '') {
        //         alert('no');
        //         setTodos([
        //             ...todos,
        //             {
        //                 content: value
        //             }
        //         ])
        //         setValue('')
        //     } else { }
        // }

        if (value.trim()) {
            setTodos([
                ...todos,
                {
                    content: value,
                    id: nanoid(), //nanoidでランダムなidを生成
                    isDone: false
                }
            ])
            setValue('')
        } else {
            alert('no')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                type="text"
                onChange={e => {
                    // console.log(e.target.value)
                    setValue(e.target.value)
                }}
            />
        </form>
    )
}

export default Form