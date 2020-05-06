// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//this is grocerylist.js from practice
import React from "react";

import Todo from "./Todo.js";

const TodoList = props => {
  //console.log("from TodoList", props.todo[0].id);
  //23:25 explained in the video props.todo.map
  return(
    <div className="todo-list">
      {props.todo.map((item)=>{
    //    console.log("inside todoList.js 's .map()", props.todo);
        return <Todo todo={item} key={item.id} toggleTodo={props.toggleTodo}/>
      })
      }
    </div>
  )
}

export default TodoList;
