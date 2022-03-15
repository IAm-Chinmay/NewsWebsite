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
          <Sliding />
              <div className='container'>
                <h3 className='my-3'>Today's , Top Head Lines :</h3><span className="badge rounded-pill bg-success">Latest</span></div>
              <hr />

          <Switch>
              <Route exact path="/"><NewsItem pageSize={5} category="general" country="in" /></Route>
              <Route exact key="business" path="/business"><NewsItem pageSize={5} category="business" country="in" /></Route>
              <Route exact key="sports" path="/sports"><NewsItem pageSize={5} category="sports" country="in" /></Route>
              <Route exact key="entertainment" path="/entertainment"><NewsItem pageSize={5} category="entertainment" country="in" /></Route>
              <Route exact key="health" path="/health"><NewsItem pageSize={5} category="health" country="in" /></Route>
              <Route exact key="spscienceorts" path="/science"><NewsItem pageSize={5} category="science" country="in" /></Route>
            <Route exact key={"about"} path="/about"><About /></Route>
          </Switch>
        </Router>
      </>

    );
  }
}

export default App;
