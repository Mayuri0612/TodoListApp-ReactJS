import React, { Component } from 'react';
//using whole class as a component


// class SingleTodo extends Component{
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }

//using functional component

const SingleTodo = props => {
    return(
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}
export default SingleTodo;