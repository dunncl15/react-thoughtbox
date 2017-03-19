import React, { Component } from 'react';

export default class CreateThought extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }

  clearInputs() {
    this.setState({
      title: '',
      body: ''
    })
  }

  render() {
    return(
      <form>
        <input className="title"
               type="text"
               onChange={ (e) => this.setState({ title: e.target.value })}
               value={ this.state.title }
        />
        <input className="body"
               type="text"
               onChange={ (e)=> this.setState({ body: e.target.value })}
               value={ this.state.body }
        />
        <button
          onClick={ (e) => { this.props.handleSubmit(e, this.state); this.clearInputs() } }>
          Submit Idea
        </button>
      </form>
    );
  }

}
