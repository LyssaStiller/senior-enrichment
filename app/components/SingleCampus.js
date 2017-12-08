import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AllStudents from './AllStudents'

export default class SingleCampus extends Component {

    constructor(){
      super();
      this.state = {
        selectedCampus: {}
      }

    }

    componentDidMount(){
      console.log(this.props)
      const campusId = this.props.match.params.campusId;

      axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus :campus
      }))
    }

    render () {
      console.log(this.state.selectedCampus)
      const campus = this.state.selectedCampus;

      return (
        <div className="campus">
          <div>
            <h3>{campus.name }</h3>
            <img src={ campus.imageUrl } className="img-thumbnail" />
          </div>
        </div>
      );
    }
}
