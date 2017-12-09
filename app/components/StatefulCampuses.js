import React, {Component} from 'react'
import axios from 'axios'
import AllCampuses from './AllCampuses';
//import SingleCampus from './SingleCampus';
import store, {getCampuses} from '../store'


export default class StatefulCampuses extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

componentDidMount () {
  this.unsubscribe = store.subscribe(()=> {
    this.setState(store.getState())
  })

  axios.get('/api/campuses/')
  .then(res => res.data)
  .then(campuses => {
    const action = getCampuses(campuses)
    store.dispatch(action)
  });
}

componentWillUnmount(){
  this.unsubscribe();
}

render() {
  const campuses = this.state.campuses

    return (
    <div>
       <AllCampuses campuses={campuses} />
    </div>
    );
  }

}


