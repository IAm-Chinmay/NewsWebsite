import './App.css';
import Navbar from './Components/Navbar';
import Sliding from './Components/Sliding';
import NewsItem from './Components/NewsItem';
import React, { Component } from 'react'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar navTitle="News Center" link1="About" btn1="Search" />

          <Switch>
            <Route exact key={"/"} path="/">
                <Sliding />
                <div className='container'>
                <h3 className='my-3'>Today's , Top Head Lines :</h3><span className="badge rounded-pill bg-success">Latest</span></div>
                <hr />
                <Route exact path="/"><NewsItem  pageSize={5} category = "general" country="in"/></Route>
                <Route exact  key = "business" path="/business"><NewsItem  pageSize={5} category = "business" country="in"/></Route>
                
            </Route>
          <Route exact key={"about"} path="/about"><About /></Route>
        </Switch>
      </Router>
      </>
  
    );
  }
}

export default App;
