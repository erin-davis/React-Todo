import React, {Component} from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }
  changeHandler = e =>{
    this.setState({todoText: e.target.value})
  }

  resetHandler = e =>{
    console.log("todoform.js", this.state.todo)
  }


  submitHandler = e =>{
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({todoText: ""});
  }


//the form will need and onsubmit and onchange in the form and the input tag
  render(){
    return(
      <div className="form-div">
      {/*console.log("from todoform", this.todo)*/}
      <form onSubmit={this.submitHandler} onReset={this.resetHandler} >
        <label for="formInput">Next item: </label>
        <input
          id="formInput"
          type="text"
          name="todoText"
          value={this.state.todoText}
          placeholder="What should I do?"
          onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        <button type="reset">Clear Completed</button>
      </form>
      </div>
    )
  }
}

export default TodoForm;
