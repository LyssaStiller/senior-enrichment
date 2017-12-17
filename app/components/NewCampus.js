import React, { Component } from 'react';
import store, { postCampus, writeCampusName, writeCampusDescription} from '../store';

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

  handleChange(evt){
    const content = evt.target.value
    const propName = evt.target.name
    if(propName === "name"){
      store.dispatch(writeCampusName(propName, content))
    }
    if(propName === "description"){
      store.dispatch(writeCampusDescription(propName, content))
    }

  }



  handleSubmit (evt) {
    evt.preventDefault();



    const newCampus = this.state.newCampus

    //this isn't making it into the database
    //consider object destructuring here
    store.dispatch(postCampus(newCampus));
    store.dispatch(writeCampusName(''));
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
          type="textarea"
          name="description"
          value={this.state.newCampus.description}
          onChange={this.handleChange}
          placeholder="Describe your campus"
          />
            <button className="btn btn-default" type="submit">Post</button>
      </form>
    );
  }
}

