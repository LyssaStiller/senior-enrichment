import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleStudent(props){

      console.log(props)
      const studentId = Number(this.props.match.params.studentId)
      console.log('$$$$', studentId)
      const students = students
      const currentStudent = students.filter((student)=> student.id === studentId)

    return (
      <div>
        <div>
          <h2>{ student.wholeName }</h2>
          <h3>GPA: {student.gpa}</h3>
          <h3>Email: {student.email}</h3>
        </div>
      </div>
    )
}




// import AllStudents from './AllStudents'


// export default class SingleStudent extends Component {

//     constructor(){
//       super()
//       this.state = store.getState()

//     }

//    componentDidMount(){
//      console.log(this.props.match.params)
//      const studentId = this.props.match.params.studentId
//      axios.get(`/api/students/${studentId}`)
//     .then(res => res.data)
//     .then(student =>
//       {const action = getStudent(student)
//       store.dispatch(action)
//     })
//   }

  // this.setState({selectedStudent :student}))
