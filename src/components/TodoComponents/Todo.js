//this takes the item.js from the practice
import React from "react";

const Todo = (props) =>{
  return(
    <div className={`todo${props.todo.completed ? "-complete" : "-incomplete"}`}
    onClick={(e) => props.toggleTodo(props.todo)}
    >
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
