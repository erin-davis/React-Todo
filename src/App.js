import React, { Component } from 'react';

import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import Todo from "./components/TodoComponents/Todo.js"

class App extends Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      name: "Erin",
      todo: [
        {
        title: "play animal crossing",
        id: Date.now(),
        completed: true
      }
    ]
    }
  }

  addTodo = todoText =>{
    const newTodo = {
      title: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [... this.state.todo, newTodo]
    });
    console.log("from addTodo", this.state.todo)
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to {this.state.name}'s Todo App!</h2>
          <div className="todo-list">
            <TodoList
              todo={this.state.todo}
            />
          </div>
          <TodoForm
            addTodo={this.addTodo}
           />
        </div>
      </div>
    );
  }
}

export default App;
