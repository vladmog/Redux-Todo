import React from 'react';
import './App.css';
import {Component} from 'react';
// import { connect } from 'react-redux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    );}
}

// function mapStateToProps(state){
//   return ({})
// }

export default App
