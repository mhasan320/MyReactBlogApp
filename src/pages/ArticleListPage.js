import React from 'react';
import ArticleContent from './Article-Content';
import ArticleList from '../components/ArticleLists';



const ArticleListPage = () => {

   return(
    <>
        <h1>Article List page</h1>
        <ArticleList articles={ArticleContent}/>
    </>
   )
}

export default ArticleListPage;