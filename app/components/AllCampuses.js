import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllCampuses = (props)=> {

  const campuses = props.campuses

    return (
      <div>
        <h3>Campuses</h3>
        <div className="row">
        {
          campuses.map(campus => (
            <div className="col-xs-4" key={campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                <img src={ campus.imageUrl } />
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }

  export default AllCampuses;


