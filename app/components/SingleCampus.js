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
      console.log('!!!',this.state)
      const campusId = this.props.match.params.campusId
      const campus = this.state.selectedCampus;
      //const students = this.props.students;
      //const filteredStudents = students.filter(student => student.campusId === campusId)



      return (
        <div className="campus">
          <div>
            <h3>{campus.name }</h3>
            <img src={ campus.imageUrl } className="img-thumbnail" />
          </div>
          <div>
            {/* <ul> {
              filteredStudents.map(function(student){
                return(
                  <li>student.wholeName</li>
                )
              })
            }
            </ul> */}
          </div>
        </div>
      );
    }
}

//working on incorporating state in order to include the students
