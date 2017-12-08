import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="http://yourbigpic.com/wp-content/uploads/2015/01/graduation_cap_cut-3.png" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a> <h1>Welcome to Stiller Academy</h1></a>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
