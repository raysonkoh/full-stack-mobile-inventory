const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello world!!!!!'
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));
