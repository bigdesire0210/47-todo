import React from 'react'
import { useState } from 'react'

const Form = ({ todos, setTodos }) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e) => {
        // console.log('Form submitted')
        //formの内容をtodoの配列に追加する処理をかく
        e.preventDefault()
        setTodos([
            ...todos,
            {
                content: value
            }
        ])
        setValue('')
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