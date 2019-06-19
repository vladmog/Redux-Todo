import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class TodoList extends Component {
    state = {

    }
    render(){
        return ( 
            <div>
                {this.props.todos.map(todo => {
                    return(
                        <div key = {Math.random()}>
                            <Todo todo = {todo} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos: state.todos
    };
};

export default connect(mapStateToProps, {})(TodoList)