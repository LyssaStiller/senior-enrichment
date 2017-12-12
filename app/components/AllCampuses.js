import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const AllCampuses = (props)=> {

  const campuses = props.campuses

    return (
      <div>
        <h3>Campuses</h3>
        <div className="row">
        {/* <form className ="form-group">
          <input
            className = 'form-control'
            placeholder = "Add a campus"
            />
        </form> */}
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
//thoughts for getting a singleCampus next time
//use onClick that triggers a filter fxn of all the campuses
//how will link change?

