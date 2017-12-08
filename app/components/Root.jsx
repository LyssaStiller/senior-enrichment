import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StatefulCampuses from './StatefulCampuses';
import SingleCampus from './SingleCampus';
import Sidebar from './Sidebar';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';

export default class Root extends Component {

 render () {
  return (
    <Router>
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>
        <Route exact path= "/" render={() => <Redirect to="/campuses"/>}/>
        <Route exact path = "/campuses" component={StatefulCampuses} />
        <Route path = '/campuses/:campusId' component={SingleCampus}/>
        <Route exact path = '/students' component = {AllStudents} />
        <Route path = '/students/:studentId' component = {SingleStudent}/>
    </div>
    </Router>
   )
 }
}



