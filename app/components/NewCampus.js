import React, { Component } from 'react';
import store, { postCampus, writeCampus} from '../store';

export default class NewCampus extends Component {

  constructor () {
    super();
    this.state = store.getState();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange (evt) {
    store.dispatch(writeCampus(evt.target.value))
  }

  handleSubmit (evt) {
    evt.preventDefault();


    const newCampus = this.state.newCampus

    store.dispatch(postCampus(newCampus));
    store.dispatch(writeCampus(''));
  }

  render () {


    return (
      <form onSubmit={this.handleSubmit}>
        <input
            type="text"
            name="name"
            value={this.state.newCampus.name}
            onChange={this.handleChange}
            placeholder="What's your campus name"/>
        <input
          type="text"
          name="content"
          value={this.state.newCampus.description}
          onChange={this.handleChange}
          placeholder="Describe your campus"
          />
            <button className="btn btn-default" type="submit">Post</button>
      </form>
    );
  }
}

