import React from 'react'
import { MdDelete } from "react-icons/md"
import { BiCheckCircle } from "react-icons/bi"
import { TiEdit } from 'react-icons/ti'

export default function ListItem(props) {
    const { todo, removeTodo, editTodo, completeTodo, importantTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "orange" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)} className="important-btn">!</button>
                <MdDelete style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
                <TiEdit onClick={() =>editTodo(todo.id)}/>
                <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
            </div>
        </div>
    )
}