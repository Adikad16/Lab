import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddArticle from '../Components/AddArticle';
import ArticleList from '../Components/ArticleList';
import UpdateArticle from '../Components/UpdateArticle';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add-article" component={AddArticle} />
        <Route path="/articles" component={ArticleList} />
        <Route path="/update-article/:id" component={UpdateArticle} />
        <Route path="/" exact component={ArticleList} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
