import React, {Component} from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'
import SingleCampus from './SingleCampus'
import store, {getStudents} from '../store'

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




