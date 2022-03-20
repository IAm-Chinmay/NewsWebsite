import './App.css';
import Navbar from './Components/Navbar';
import Sliding from './Components/Sliding';
import NewsItem from './Components/NewsItem';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  state = {
    progress : 0 
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar navTitle="News Center" link1="About" btn1="Search" />
          <Sliding />
          <LoadingBar
            color='black'
            height={4}
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <hr />
          <div className='container'>
            <h3 className='my-3'>Today's , Top Head Lines :</h3><span className="badge rounded-pill bg-success">Latest</span>
          </div>
          <Switch>
            <Route exact path="/"><NewsItem setProgress={this.setProgress} pageSize={8} category="general" country="in" /></Route>
            <Route exact key="business" path="/business"><NewsItem setProgress={this.setProgress} pageSize={8} category="business" country="in" /></Route>
            <Route exact key="sports" path="/sports"><NewsItem setProgress={this.setProgress} pageSize={8} category="sports" country="in" main_title="Sports" /></Route>
            <Route exact key="entertainment" path="/entertainment"><NewsItem setProgress={this.setProgress} pageSize={8} category="entertainment" country="in" /></Route>
            <Route exact key="health" path="/health"><NewsItem setProgress={this.setProgress} pageSize={8} category="health" country="in" /></Route>
            <Route exact key="spscienceorts" path="/science"><NewsItem setProgress={this.setProgress} pageSize={8} category="science" country="in" /></Route>
          </Switch>

        </Router>
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          By Chinmay
        </div>
      </>

    );
  }
}

export default App;
