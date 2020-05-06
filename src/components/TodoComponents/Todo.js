//this takes the item.js from the practice
import React from "react";

const Todo = (props) =>{
  console.log("inside todo.js", props.todo.title);
  return(
    <div className="todo-item">
      {/*props.todo.map((toDoItem, index)=>{
       return `${props.toDoItem[index].title}`
      console.log("inside the .map of todo.js", props.todo[index].title);
    })*/
    props.todo.title
  }
    </div>
  )
}

export default Todo;
