import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import AllCampuses from './AllCampuses';
// import AllStudents from './AllStudents';
// import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import Sidebar from './Sidebar';

export default class Root extends Component {
 constructor(props){
   super(props)
   this.state = {
     campuses: [],
     students: [],
     selectedStudent : {},
     selectedCampus: {}
   }
   this.selectCampus = this.selectCampus.bind(this)
 }

 componentDidMount () {
  axios.get('/api/campuses/')
    .then(res => res.data)
    .then(campuses => {
      this.setState({ campuses })
    });
}

selectCampus(campusId) {
  axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => this.setState({
      selectedCampus: campus
    }));
}


deselectCampus () {
  this.setState({ selectedCampus: {}});
}


 render () {
  console.log('!!!!', this.state)
  return (
    <div id="main" className="container-fluid">
      <div className = "col-x-2">
      <Sidebar/>
      </div>
      <div className = "col-x-10">
      {
      this.state.selectedCampus.id ?
      <SingleCampus campus={this.state.selectedCampus}/> :
      <AllCampuses campuses={this.state.campuses} selectCampus={this.selectCampus} />
      }
      </div>
      <h1>YEAAA MOTHERFUCKERR</h1>
    </div>
   )
 }
}
