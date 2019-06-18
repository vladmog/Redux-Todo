import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from './actions/actions';

const style = {
    textDecoration: "line-through",
    border: "solid red 1px"
}

class Todo extends Component {
    state = {

    }

    
    render(){
        if (this.props.todo.completed === false){
            return(
                <div
                    onClick = {}
                >
                    <p>{this.props.todo.value}</p>
                </div>
            ) 
        }else{
            return(
                <div>
                    <p style = {style}>{this.props.todo.value}</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return{};
};

export default connect (mapStateToProps, {toggle})(Todo);