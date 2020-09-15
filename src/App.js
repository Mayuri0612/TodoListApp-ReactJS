import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import SingleTodo from './SingleTodo';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todos : [],
      currentTodo : ''
    };
  }

  onInputChange = e => {
    this.setState({
      currentTodo : e.target.value
    });
  }

  onClick = () => {
    let todoCopy = this.state.todos.slice();
    todoCopy.push(this.state.currentTodo);

    this.setState({
      todos : todoCopy,
      currentTodo : ''
    });
  }


  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i,1);
    this.setState({
      todos : todosCopy
    });
  }

  render(){
    let bulletTodos = this.state.todos.map((e,i) => {
      return(
        // all props are passed in SingleTodo(compponent of parent of these props)
        <SingleTodo todo={e} delete ={() => this.deleteTodo(i)}/>
      );
    });

    return (
      <div style ="background-image : url('[C:\Users\hp\Desktop\SELF_LEARNING\ReactJS\basic-react\public\bg.jpeg]')">
        <input placeholder = "Enter TODO"  value = {this.state.currentTodo} onChange={this.onInputChange}/>
        <button onClick={this.onClick}>ADD</button>
        <br />
        { this.state.todos.length === 0 ? "No todos yet" : <ul>{bulletTodos}</ul>}
      </div>
    );
  }
}



export default App;
