import React, { Component } from 'react';
import './App.css';
import CreateThought from './createThought/createThought';
import ThoughtList from './thoughtList/thoughtList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      thoughts: []
    }
  }

  submitIdea(e, thought) {
    e.preventDefault();
    thought.id = Date.now();
    this.setState({
      thoughts: [...this.state.thoughts, thought]
    })

  }

  render() {
    return (
      <div>
        <CreateThought
        handleSubmit={(e, thought) => this.submitIdea(e, thought)}
        />
        <ThoughtList />
      </div>
    )
  }
}

export default App;
