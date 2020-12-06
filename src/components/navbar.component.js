import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">RestaurantReview</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/fav" className="nav-link">Favorites</Link>
          </li>
          <li className="navbar-item">
          <Link to="/review" className="nav-link">Review</Link>
          </li>
          <li className="navbar-item">
          <Link to="/aboutus" className="nav-link">AboutUs</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}