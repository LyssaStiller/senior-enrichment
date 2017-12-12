import React, {Component} from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'
//import SingleStudent from './SingleStudent'
import SingleCampus from './SingleCampus'
import store, {getStudents} from '../store'

//export default class AllStudents extends Component {

  // constructor(){
  //   super()
  //   this.state = store.getState();
  // }

  // componentDidMount(){
  //   this.unsubscribe = store.subscribe(()=> {
  //     this.setState(store.getState())
  //   })
  // }

  // componentWillUnmount(){
  //  this.unsubscribe();
  // }
//took out render(){}
  const AllStudents = (props) => {

    const students = props.students
    console.log(students)
    return (
    <div>
        <h3>Students</h3>
            { students &&
              students.map(student => (
                <div key={student.id }>
                  <Link to={`/students/${student.id}`}>
                      <h5>
                        <span>{student.wholeName}</span>
                      </h5>
                  </Link>

                </div>))
            }
    </div>
    );
}

export default AllStudents
// </Link></li>
// <li><Link to ={`/students/${student.campusId}`}>Campus</Link></li>
{/* <Route path={`/students/${student.campusId}`} render ={()=>(<SingleCampus students={students} /> )} />
</Switch> */}
   {/* <Route path={`/students/${student.id}`} render ={()=>(<SingleStudent students={students} /> )} /> */}
    {/* <SingleStudent student={student}/> */}



