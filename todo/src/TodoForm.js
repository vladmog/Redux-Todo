import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/actions';

class TodoForm extends Component {
    state = {
        todo: "",
        completed: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({
            todo: ""
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input
                       name = "todo"
                       value = {this.state.todo }
                       onChange = {this.changeHandler}
                    />
                    <button
                        onClick = {this.submitHandler}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//         todos: state.todos
//     }
// }

// export default connect ()(TodoForm);
const mapStateToProps = (state) => {
    return{};
};

export default connect(mapStateToProps, {addTodo})(TodoForm)