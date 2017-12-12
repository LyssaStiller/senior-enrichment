import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store, {getCampus} from '../store'

export default class SingleCampus extends Component {

constructor(){
  super();
  this.state = store.getState()
}

componentDidMount(){
  this.unsubscribe = store.subscribe(() => {
    this.setState(store.getState())
  })

  const campusId = this.props.match.params.campusId;

    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      const action = getCampus(campus)
      store.dispatch(action)
    });
}

componentWillUnmount(){
  this.unsubscribe();
}

render () {
      const campus = this.state.currentCampus;
      const students = this.state.students;
      const filteredStudents = students.filter(student => student.campusId === campus.id)

return (
  <div className="campus">
       <img src={campus.imageUrl} className="img-thumbnail" />
              <h2>{campus.name }</h2>
              <h4>{campus.description}</h4>
              {
                filteredStudents.map(function(student,i){
                return(
                  <Link to={`/students/${student.id}`} key={i}>
                  <h3>{student.wholeName}</h3>
                  </Link>
                )
                })
              }
  </div>
      );
  }
}
