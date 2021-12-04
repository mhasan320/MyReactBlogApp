import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({articles}) => {
    return (
        <>
            {
                articles.map((article, key) => (
                    <Link className="article-content" key={key} to={`/article/${article.name}`}>
                        <h3>{article.title}</h3>
                        <p>{article.content[0].substring(0,180)}...(Read More)</p>
                    </Link>
                ))
            }
        </>
    )
}

export default ArticleList;