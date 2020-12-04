import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;


/*import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import Home from "./components/home.component";
import Favorites from "./components/favorites.component.js";
import Review from "./components/review.component";
import AboutUs from "./components/aboutus.component";



function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/favour" component={Favorites} />
      <Route path="/review" component={Review} />
      <Route path="/aboutus" component={AboutUs} />
      </div>
    </Router>
  );
 }
 

export default App;*/
