import React from 'react';
import { useParams } from 'react-router';
import ArticleContent from './Article-Content';
import ArticleList from '../components/ArticleLists';
import NotFoundPage from './NotFoundPage';


const Article = ({ match }) => {
   const {name } = useParams();
   const article = ArticleContent.find(article => article.name === name);

   const OtherList = ArticleContent.filter(article => article.name !== name);

   if(!article) return <NotFoundPage />
   return(
    <>
        <h1>{article.title}</h1>
        {
            article.content.map((paragraph, key)=>(
                <p key={key}>{paragraph}</p>
            ))
        }
        <hr style={{ marginTop: '4rem'}}/>
        <h3 style={{fontFamily:"'Oswald', sans-serif"}}>Related Article: </h3>
        <ArticleList articles={OtherList} />
    </>
   )
}

export default Article;