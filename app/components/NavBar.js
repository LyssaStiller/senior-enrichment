import React from 'react';
import { connect } from 'react-redux';
import AllStudents from './AllStudents'

function NavBar () {

  return (
    <nav>
       <img src="http://yourbigpic.com/wp-content/uploads/2015/01/graduation_cap_cut-3.png" className="logo" />
        <section>
          <h4 className="menu-item">
            <Link to="/campuses">HOME</Link>
          </h4>
        </section>
        <section>
          <h4 className="menu-item">
            <Link to="/students">STUDENTS</Link>
          </h4>
        </section>
    </nav>
  )
}
