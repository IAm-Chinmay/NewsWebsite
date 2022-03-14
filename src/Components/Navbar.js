
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SiteCss/Newscard.css'

export default class Navbar extends Component {
  render() {  
    let { navTitle, link1 } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top" >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><strong>{navTitle}</strong></Link>
            <div className="btn-group">
              <button type="button" className="btn btn-dark-my">More News</button>
              <button type="button" className="btn btn-dark-my dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/business">business</Link></li>
                <li><Link className="dropdown-item" to="#">entertainment</Link></li>
                <li><Link className="dropdown-item" to="#">health</Link></li>
                <li><Link className="dropdown-item" to="#">science</Link></li>
                <li><Link className="dropdown-item" to="#">sports</Link></li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active mx-3" aria-current="page" to="/Linkbout">{link1}</Link>
              </div>
            </div>
         
          </div>
        </nav>
      </div>
    )
  }
}
