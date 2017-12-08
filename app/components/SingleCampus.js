import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SingleCampus extends Component {

    render () {

      const student = this.props.selectCampus;

      return (
        <div className="campus">
          <div>
            <h3>{campus.wholeName }</h3>
            <img src={ campus.imageUrl } className="img-thumbnail" />
          </div>
        </div>
      );
    }
  }
