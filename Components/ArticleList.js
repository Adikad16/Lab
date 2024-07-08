import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticles();
  }, []);
  
  return (
    <div>
      <h2>Article List</h2>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>{article.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
