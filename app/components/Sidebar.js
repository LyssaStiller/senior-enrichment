import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="http://yourbigpic.com/wp-content/uploads/2015/01/graduation_cap_cut-3.png" className="logo" />
      <section>
        <h1 className="menu-item active">
         Welcome to Stiller Academy
        </h1>
      </section>
      <section>
        <h3 className="menu-item active">
        <Link to= '/campuses'>HOME</Link>
        </h3>
      </section>
        <Link to= '/students'>All The Students</Link>
      <section>
      </section>
        <Link to= '/campuses'>Campuses</Link>
      <section>
        <Link to= '/new-campus'>Play God</Link>
      </section>
    </sidebar>
  );
}

export default Sidebar;
