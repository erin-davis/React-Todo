import React, { Component } from 'react';

import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import Todo from "./components/TodoComponents/Todo.js"
import {fullList} from "./components/data.js";

class App extends Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      name: "Erin",
      todo: fullList,
      id: Date.now()
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to {this.state.name}'s Todo App!</h2>
          <TodoForm />
        </div>
        <div className="todo-list">
        <p>There is TodoList under here</p>
          <TodoList
            todo={this.state.todo}

          />
        </div>
      </div>
    );
  }
}

export default App;
