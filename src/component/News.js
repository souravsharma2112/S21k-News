// import { async } from 'q';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country:"in",
        category:"general",
        pageSize:5
    }
    static propTypes ={
        country: PropTypes.string,
        category:PropTypes.string,
        pageSize:PropTypes.number
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            pageSize: 20,
            page: 1,
        }
        document.title = `S21k News | ${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews (){
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5aa366202e4d4c5eacdc82bbb91a67fa&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(URL);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false ,publishedAt:parsedData.publishedAt,author:parsedData.author })
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevClick = async () => {
        this.setState({page: this.state.page - 1})
        this.updateNews();
    }

    handleNextClick = async () => {
        this.setState({page: this.state.page + 1})
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <div className="d-flex justify-content-center container my-3">
                <h2>S21k News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>

                </div>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4 my-3">
                            <NewsItem newsTitle={element.title} newsDiscription={element.description} newsImageURL={element.urlToImage} newsURL={element.url} publishedAt={element.publishedAt} author={element.author} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /  this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
