import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Favorites from "./components/favorites.component";
import Review from "./components/review.component";
import Aboutus from "./components/aboutus.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/fav" component={Favorites} />
        <Route path="/review" component={Review} />
        <Route path="/aboutus" component={Aboutus} />
      </div>
    </Router>
  );
}

export default App;