const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/open-ai', (req, res) => {
  let key = process.env.OPEN_AI_KEYWORD_EXTRACTOR_API_KEY;

  res.status(200).send({ key });
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
