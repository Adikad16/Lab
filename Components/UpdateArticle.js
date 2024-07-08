import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateArticle = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [creatorName, setCreatorName] = useState('');

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${id}`);
        setName(response.data.name);
        setCategory(response.data.category);
        setDateCreated(response.data.dateCreated);
        setCreatorName(response.data.creatorName);
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticle();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/articles/${id}`, {
        name,
        category,
        dateCreated,
        creatorName,
      });
      history.push('/articles');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateCreated">Date Created:</label>
          <input
            type="date"
            id="dateCreated"
            value={dateCreated}
            onChange={(e) => setDateCreated(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="creatorName">Creator Name:</label>
          <input
            type="text"
            id="creatorName"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
          />
        </div>
        <button type="submit">Update Article</button>
      </form>
    </div>
  );
};

export default UpdateArticle;
