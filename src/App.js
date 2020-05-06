import React, { Component } from 'react';

import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";
import Todo from "./components/TodoComponents/Todo.js"

import "./App.css"

class App extends Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      name: "Erin",
      todo: [
        {
        title: "",
        id: Date.now(),
        completed: true
      }
    ]
    }
  }

  toggleTodo = todoId => {
    console.log(`${todoId.title} has been toggled`);
    this.setState({
      todo: this.state.todo.map(item =>{
        if(todoId.id === item.id){
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTodo = todoText =>{
    const newTodo = {
      title: todoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [... this.state.todo, newTodo]
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to {this.state.name}'s Todo App!</h2>
          <h3>There are currently {this.state.todo.length - 1} available tasks</h3>
          <div className="todo-list">
            <TodoList
              todo={this.state.todo}
              toggleTodo={this.toggleTodo}
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
