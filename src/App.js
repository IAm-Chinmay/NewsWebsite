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
          <hr/>
          <div className='container'>
            <h3 className='my-3'>Today's , Top Head Lines :</h3><span className="badge rounded-pill bg-success">Latest</span></div>
     

          <Switch>
            <Route exact path="/"><NewsItem pageSize={8} category="general" country="in" /></Route>
            <Route exact key="business" path="/business"><NewsItem pageSize={8} category="business" country="in" /></Route>
            <Route exact key="sports" path="/sports"><NewsItem pageSize={8} category="sports" country="in" /></Route>
            <Route exact key="entertainment" path="/entertainment"><NewsItem pageSize={8} category="entertainment" country="in" /></Route>
            <Route exact key="health" path="/health"><NewsItem pageSize={8} category="health" country="in" /></Route>
            <Route exact key="spscienceorts" path="/science"><NewsItem pageSize={8} category="science" country="in" /></Route>
          </Switch>
        </Router>
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          By Chinmay 
        </div>
      </>

    );
  }
}

export default App;
