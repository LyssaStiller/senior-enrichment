import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store, {getStudent} from '../store'

export default class SingleStudent extends Component {

constructor(){
  super();
  this.state = store.getState()
}

componentDidMount(){
  this.unsubscribe = store.subscribe(() => {
    this.setState(store.getState())
  })

  const studentId = this.props.match.params.studentId;

    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      const action = getStudent(student)
      store.dispatch(action)
    });
}

componentWillUnmount(){
  this.unsubscribe();
}

render(){
  const student = this.state.currentStudent;


return (
  <div>
    <div>
      <h2>{ student.wholeName }</h2>
      <h3>GPA: {student.gpa}</h3>
      <h3>Email: {student.email}</h3>
      <Link to={`/campuses/${student.campusId}`}>
      <h3>Campus {student.campusId}</h3>
      </Link>
    </div>
  </div>
    )
  }
}

