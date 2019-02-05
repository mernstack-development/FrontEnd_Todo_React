import React, { Component } from 'react';
import TodoTable from './TodoTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {description: '', date: '', todos: []}
  }

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  addTodo = (event) => {
    event.preventDefault();
    const newTodo =  {description: this.state.description, date: this.state.date};
    this.setState({
      date: '',
      description: '',
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
          <form onSubmit={this.addTodo}>
            <fieldset>
            <legend>New todo:</legend>
            Description: <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>
            Date: <input type="text" placeholder="dd.mm.yyyy" name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
            </fieldset>
          </form>
        </div>
        <TodoTable todos={this.state.todos} />        
      </div>    
    );
  }
}

export default App;
