import React from 'react'
import {Link} from 'react-router-dom';
import '../Nav.css'


export default function Nav() {
  return (
    <div className="nav">
      <ul className="nav">
        <li className="nav-item">
          <Link to='/' className="nav-link" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/chicago' className="nav-link" >
            Chicago
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/losangeles' className="nav-link" >
            Los Angeles
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/newyork' className="nav-link">
            New York
            </Link>
        </li>
      </ul>
    </div>
  );
}
