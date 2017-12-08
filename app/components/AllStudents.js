import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllStudents extends Component {

  constructor(){
    super()
    this.state = {
      students : []
    }
  }

  componentDidMount(){
    axios.get('/api/students')
    .then(res => res.data)
    .then(students =>
      this.setState({students}))
  }

  render (){

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


