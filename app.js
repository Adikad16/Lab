const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Article model
const Article = mongoose.model('Article', {
  name: String,
  category: String,
  dateCreated: Date,
  creatorName: String,
});

// API routes
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/articles', async (req, res) => {
  const article = new Article({
    name: req.body.name,
    category: req.body.category,
    dateCreated: req.body.dateCreated,
    creatorName: req.body.creatorName,
  });

  try {
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
