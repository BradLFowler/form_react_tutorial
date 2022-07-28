import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios.post('/user', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })

    this.setState({
      firstName: "",
      lastName: ""
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Form in React</p>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input name="firstName" type="text" value={this.state.firstName} onChange={e => {this.handleChange(e)}} />
            <input name="lastName" type="text" value={this.state.lastName} onChange={e => {this.handleChange(e)}} />
            <input type="submit" />
          </form>
        </header>
      </div>
    )
  }
}
