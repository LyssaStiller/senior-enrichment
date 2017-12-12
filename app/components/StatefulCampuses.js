
import React, {Component} from 'react'
import AllCampuses from './AllCampuses';
import store from '../store'


export default class StatefulCampuses extends Component {
  constructor(){
    super();
    this.state = store.getState();
  }

componentDidMount () {
  this.unsubscribe = store.subscribe(()=> {
    this.setState(store.getState())
  })
}

componentWillUnmount(){
  this.unsubscribe();
}

render(){
const campuses = this.state.campuses
const students = this.state.students

//   console.log("!!!!", students)
  return(
    <div>
       <AllCampuses campuses={campuses} />
    </div>
    );
  }
}

 {/* <AllStudents campuses={campuses} /> */}
 //student count per campus
 //map box per location
