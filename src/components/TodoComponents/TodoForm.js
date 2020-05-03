import React, {Component} from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    }
  }


//the form will need and onsubmit and onchange in the form and the input tag
  render(){
    return(
      <form >
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
        />
        <button type="submit">Add Todo</button>
        <button type="reset">Clear Completed</button>
      </form>
    )
  }
}

export default TodoForm;
