//this takes the item.js from the practice
import React from "react";

const Todo = (props) =>{
  return(
    <div className="todo-item">
      {props.todo.map((toDoItem)=>{
        return `${toDoItem.title}`
      })}
    </div>
  )
}

export default Todo;
