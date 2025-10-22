import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [];
    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=0d163e6fa8044aa5815e5f1df6c897eb";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles })
    }

    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2>FactFlash - Top Headlines</h2>
                <div className="row my-4">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>
                            <NewsItem
                                mode={this.props.mode}
                                title={
                                    element.title
                                        ? element.title.length > 85
                                            ? element.title.slice(0, 85) + "..."
                                            : element.title
                                        : ""
                                }
                                description={
                                    element.description
                                        ? element.description.length > 100
                                            ? element.description.slice(0, 100) + "..."
                                            : element.description
                                        : ""
                                }
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                            />
                        </div>

                    })}
                </div>
            </div>
        )
    }
}

export default News
