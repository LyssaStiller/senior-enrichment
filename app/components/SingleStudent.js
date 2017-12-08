import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AllStudents from './AllStudents';
import axios from 'axios';


export default class SingleStudent extends Component {

    constructor(){
      super()
      this.state = {
        selectedStudent: {}
      }
    }

   componentDidMount(){
     const studentId = this.props.match.params.studentId
     axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => this.setState({selectedStudent :student}))
   }

  render () {

    const student = this.state.selectedStudent
    console.log('!!!', student)
    return (
      <div className="student">
        <div>
          <img src={ student.imageUrl } className="img-thumbnail" />
          <h2>{ student.wholeName }</h2>
          <h3>GPA: {student.gpa}</h3>
          <h3>Email: {student.email}</h3>
        </div>
      </div>
    );
  }
}
