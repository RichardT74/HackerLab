import React from 'react';
import NewsList from './NewsList';

const NewsItem = (props) => {
	return(
		<div>
		<h3> {props.article.title}</h3>
		<a href={props.article.url}>click to see more</a>
		</div>
	)// N12, NewsItem can display more values of the object. sends back to NewsList
}

export default NewsItem
