const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/projects', (req, res) => {
  res.json([{ id: 1, name: 'Sample Project' }]);
});

app.listen(5000, () => console.log('Backend running on port 5000'));