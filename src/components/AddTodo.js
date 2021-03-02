import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        //console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value})
    }    

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add new Todo..." onChange={this.onChange} value={this.state.title} style={{flex: '10', padding: '5px'}} />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}} />
            </form>
        )
    }
}

