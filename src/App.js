import './App.css';
import Navbar from './Components/Navbar';
import Sliding from './Components/Sliding';
import NewsItem from './Components/NewsItem';
import React, { Component } from 'react'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Navbar navTitle="News Center" link1="About" btn1="Search" />
        <Sliding />

        <div className='container'>
          <h3 className='my-3'>Today's , Top Head Lines :</h3><span className="badge rounded-pill bg-success">Latest</span>
          <hr/>
          <NewsItem pageSize = '19'/>
          {/* <About /> */}
        </div>
      </>
    );
  }
}

export default App;
