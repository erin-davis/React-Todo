// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//this is grocerylist.js from practice
import React from "react";

import Todo from "./Todo.js";

const TodoList = props => {
  console.log("from TodoList", props.todo);
  //23:25 explained in the video props.todo.map
  return(
    <div className="todo-list">
      {props.todo.map((item)=>{
        return <Todo todo={props.todo} key={props.todo.id}/>
      })
      }
    </div>
  )
}

export default TodoList;
