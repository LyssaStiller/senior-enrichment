import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store, {getStudents} from '../store'
import SingleCampus from './SingleCampus'

export default class AllStudents extends Component {

  constructor(){
    super()
    this.state = store.getState();
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(()=> {
      this.setState(store.getState())
    })


    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students)
      store.dispatch(action)
    })
  }

  componentWillUnmount(){
   this.unsubscribe();
  }

//
    render(){
    const students = this.state.students
    return (
      <div>
        <h3>Students</h3>
        <div className="row">
        {
          students.map(student => (
            <div className="col-xs-4" key={student.id }>
              <Link className="thumbnail" to={`/students/${student.id}`}>
                <img src={ student.imageUrl } />
                  <h5>
                    <span>{student.wholeName}</span>
                  </h5>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}



