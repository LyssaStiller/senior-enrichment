import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StatefulCampuses from './StatefulCampuses';
import SingleCampus from './SingleCampus';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import StatefulStudents from './StatefulStudents';
import SingleStudent from './SingleStudent';
import NewCampus from './NewCampus';
import store, {fetchCampuses, fetchStudents} from '../store'

export default class Root extends Component {

  componentDidMount(){
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

 render () {
  return (
    <Router>
    <div id="main" className="container-fluid">
      <div className="col-xs-2">
        <Sidebar />
      </div>
      <Switch>
        <Route exact path= "/" render={() => <Redirect to="/campuses"/>}/>
        <Route exact path = "/campuses" component={StatefulCampuses} />
        <Route exact path = "/students" component={StatefulStudents} />
        <Route path = '/campuses/:campusId' component={SingleCampus}/>
        <Route path = '/students/:studentId' component={SingleStudent}/>
        <Route path = '/new-campus' component={NewCampus} />
      </Switch>
    </div>
    </Router>
   )
 }
}

//  {/* <Route path = '/students/:studentId' component = {SingleStudent}/> */}
//
{/* <Route path="/students/:id" component={SingleStudent}/> */}
