import './SiteCss/Newscard.css'
import news from './images/news.jpg'

import React, { Component } from 'react'

export default class NewsCard extends Component {
  render() {
    let {title , description , imglink , url} = this.props
    return (
      <div>
        <div className='container'>
        <div className="card my-3 mx-4 incard" style={{ width: '15rem', height: '27rem' }}>
          <img src={!imglink?news:imglink} className="card-img-top " alt="..." />
          <div className="card-body">
          <h6 className="card-title">{title}...</h6>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" className="btn btn-sm btn-outline-secondary">In Details</a>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

