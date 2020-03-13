import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    addTask = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ' '});
    }

    getVal = (e) => this.setState({title: e.target.value})
    render() {
        return (
            <form onSubmit={this.addTask} style={{display: 'flex'}}>
                <input type="text" name="title" style={{flex: '10', padding: '5px'}} placeholder="Add Todo ..." 
                value={this.setState.title} onChange={this.getVal}/>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }
}

export default AddTodo
