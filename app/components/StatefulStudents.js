import React, {Component} from 'react'
import axios from 'axios'
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import store, {getStudents, getStudent} from '../store'

export default class StatefulStudents extends Component {
    constructor(){
      super();
      this.state = store.getStore();
    }


componentDidMount () {
  this.unsubscribe = store.subscribe(()=> {
    this.setState(store.getState())
  })

  axios.get('/api/students/')
  .then(res => res.data)
  .then(stdents => {
    const action = getStudents(students)
    store.dispatch(action)
  });

  const studentId = this.props.match.params.studentId
  axios.get(`/api/students/${studentId}`)
 .then(res => res.data)
 .then(student => this.setState({selectedStudent :student}))
  }

componentWillUnmount(){
  this.unsubscribe();
}

render() {
  const students = this.state.students
  const student = this.state.selectedStudent

    return (
    <div>
       <AllStudents students={students} />
      <SingleStudent selectedStudent={selectedStudent} />
    </div>
    );
  }
}
