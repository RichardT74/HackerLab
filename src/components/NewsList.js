import React from 'react';
import NewsItem from './NewsItem.js';


const NewsList = (props) => {
	const newsNodes = props.articles.map((article) => {
		return ( <NewsItem key={article.id} article={article}></NewsItem> );
	})//No11. newsNodes selects object and sends to NewsItem for to select values

	return(
		<>
		{newsNodes} // No13 info returned from NewsItem
		</>
	);
};

export default NewsList;
