import React, { Component } from 'react';
import NewsList from '../components/NewsList';
//
// import NewsSearch from '../components/NewsSearch';



class NewsContainer extends Component {
		constructor(props){
		super(props);
		this.state = {
		hackerArticles: [] //No9<- now full of stories
	};
	}
	componentDidMount() {
		const url = "https://hacker-news.firebaseio.com/v0/topstories.json";// No.1 specefies original api of keys

		fetch(url) //no.2 fetch url
		.then(res => res.json()) // No.3 get response from api with keys
		.then(articleKey => articleKey.slice(0,25).map(id => { //No4. puts keys into articleKey array then maps the first 25 by index
			return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)// No5 put relevant index into url and fetch
					.then(res => res.json())//No6. get response from api with objects
		}))
		.then(promises => {
			Promise.all(promises) //No7. when all requests (promises) have been resolved
				.then(stories => this.setState({hackerArticles: stories})) //No8. add objects to stories array and send to hackerArticles with setState
		})
		.catch(err => console.error);
	}

render(){
	return (
		<div>
		<h1>Hacker News</h1>
		<NewsList articles={this.state.hackerArticles} /> //No10 pass hackerArticles to NewsList as props.articles/
		</div>
	);
}
}

export default NewsContainer

//
