import Newscard from './NewsCard'
import './SiteCss/Newscard.css'


import React, { Component } from 'react'
import Spinner from './Spinner';

export default class NewsItem extends Component {

  // articles = []
  constructor() {
    super();
    console.log("Constructor Working");
    this.state = {
      articles: [],
      page: 1 ,
      loading : false 
    }
  }

  async componentDidMount() {
    console.log("cdm workingg");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e626cb1b58458bbb478e20d8610b21&page=${this.state.page}& pageSize= 20`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedDate = await data.json()
    this.setState({ articles: parsedDate.articles,
      totalResults : parsedDate.totalResults,
      loading : false
    })
    console.log(parsedDate);
  }

  nextPageEvent = async () => {
    console.log("Working");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e626cb1b58458bbb478e20d8610b21&page=${this.state.page + 1} & pageSize= ${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedDate = await data.json()
      this.setState({loading:false});
      this.setState({ articles: parsedDate.articles, page: this.state.page + 1 })
    }
    window.scrollTo(0, 0);
  }

  prvPageEvent = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2e626cb1b58458bbb478e20d8610b21&page=${this.state.page - 1} & pageSize= ${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedDate = await data.json()
    this.setState({loading:false});
    this.setState({ articles: parsedDate.articles, page: this.state.page - 1 })
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-3' key={element.url}>
              <Newscard title={element.title.slice(0, 50)} description={element.description ? element.description.slice(0, 50) : ""} imglink={element.urlToImage} url={element.url} />
            </div>
          })}
        </div>
        <hr/>
        <div className='container d-flex justify-content-between my-3'>
          <button type="button" disabled={this.state.page <= 1} onClick={this.prvPageEvent} className="btn btn-outline-secondary">&larr; Previous</button>
          {this.state.loading && <Spinner/>}
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-outline-secondary" onClick={this.nextPageEvent}>Next 	&rarr;</button>
        </div>
      </div>
    )
  }
}
