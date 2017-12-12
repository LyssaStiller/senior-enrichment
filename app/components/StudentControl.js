import React, { Component } from 'react';
import store, { postStudent, writeStudent} from '../store';

export default class NewStudent extends Component {

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
    store.dispatch(writeStudent(evt.target.value))
  }

  handleSubmit (evt) {
    evt.preventDefault();

    const { newStudent } = this.state;
    const content = newStudent;
    const { channelId } = this.props;

    store.dispatch(postStudent({ firstName, lastName, email, gpa, channelId }));
    store.dispatch(writeStudent(''));
  }

  render () {
    return (
      <form id="new-message-form" onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="content"
            value={this.state.Student}
            onChange={this.handleChange}
            placeholder="Add a student"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Post</button>
          </span>
        </div>
      </form>
    );
  }
}
