import React, {Component} from 'react'
import AllStudents from './AllStudents';
//import SingleStudent from './SingleStudent';
import store from '../store';

export default class StatefulStudents extends Component {
    constructor(){
      super();
      this.state = store.getState();
    }

componentDidMount () {
  this.unsubscribe = store.subscribe(()=> {
    this.setState(store.getState())
  })
}

componentWillUnmount(){
  this.unsubscribe();
}

render() {
  const students = this.state.students

    return (
    <div>
       <AllStudents students={students} />
    </div>
    );
  }
}
//<SingleStudent students={students} />
