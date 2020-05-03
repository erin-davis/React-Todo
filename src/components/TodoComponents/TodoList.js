// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//this is grocerylist.js from practice
import React from "react";

import Todo from "./Todo.js";

const TodoList = props => {
  console.log(props.todo)
  return(
    <div className="todo-list">
      {/*todo.map(todo =>{
        return <Todo todo={todo} key={todo.id}/>
      })*/
      }
    </div>
  )
}

export default TodoList;
