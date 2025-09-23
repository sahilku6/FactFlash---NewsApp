import React, { Component } from 'react'
import './NewsItem.css' // Import the CSS file

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className={`card news-card ${this.props.mode === "dark" ? "news-card-dark" : "news-card-light"}`}>
                    <img
                        src={imageUrl ? imageUrl : "https://via.placeholder.com/300x180?text=No+Image"}
                        className="card-img-top news-img"
                        alt="news"
                    />
                    <div className="card-body">
                        <h5 className="card-title news-title">{title}</h5>
                        <p className="card-text news-desc">{description}</p>
                        <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
