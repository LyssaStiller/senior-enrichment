import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AllStudents from './AllStudents';


export default class SingleStudent extends Component {

  render () {

    const student = this.props.selectedStudent;

    return (
      <div className="student">
        <div>
          <h3>{ student.wholeName }</h3>
          <img src={ student.imageUrl } className="img-thumbnail" />
        </div>
      </div>
    );
  }
}
