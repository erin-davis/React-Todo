//this takes the item.js from the practice
import React from "react";

const Todo = (props) =>{
  return(
    <div className="tasks">
      {props.todo.name}
    </div>
  )
}

export default Todo;
