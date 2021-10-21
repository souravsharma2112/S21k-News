import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { newsTitle, newsDiscription, newsImageURL, newsURL, publishedAt, author, source } = this.props;  // JavaScript Distructuring
        return (
            <div>
                <div className="card">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                    <img src={!newsImageURL ? "https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-803200446.jpg?w=600" : newsImageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{newsTitle}</h5>
                        <div className="card-para">
                            <div className='d-flex justify-content-between'>
                                <p className="date-time"><small className="text-muted">{new Date(publishedAt).toLocaleDateString()}</small></p>
                                <p className="date-time"><small className="text-muted">{new Date(publishedAt).toLocaleTimeString()}</small></p>
                            </div>
                            <p className="card-text"><small className="text-muted">Author :- {author ? author : "Unknown"}</small></p>
                        </div>
                        <p className="card-text">{newsDiscription}</p>
                        <a href={newsURL} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
