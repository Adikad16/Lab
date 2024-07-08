import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [dateCreated, setDateCreated] = useState('');
  const [creatorName, setCreatorName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/articles', {
        name,
        category,
        dateCreated,
        creatorName,
      });
      console.log(response.data);
      // Reset form fields
      setName('');
      setCategory('');
      setDateCreated('');
      setCreatorName('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Article</h2>
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
        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
