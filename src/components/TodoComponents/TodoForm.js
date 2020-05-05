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

  submitHandler = e =>{
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({todoText: ""});
  }


//the form will need and onsubmit and onchange in the form and the input tag
  render(){
    return(
      <form onSubmit={this.submitHandler} >
        <label for="formInput">Next item: </label>
        <input
          id="formInput"
          type="text"
          name="todoText"
          value={this.todoText}
          placeholder="What should I do?"
          onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        <button type="reset">Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;
