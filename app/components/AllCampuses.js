import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class AllCampuses extends Component {
  render () {
    const campuses = this.props.campuses;
    const selectCampus = this.props.selectCampus;

    return (
      <div>
        <h3>Campuses</h3>
        <div className="row">
        {
          campuses.map(campus => (
            <div className="col-xs-4" key={campus.id }>
              <a className="thumbnail" href="#" onClick={() => selectCampus(campus.id)}>
                <img src={ campus.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ campus.name }</span>
                  </h5>
                </div>
              </a>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

