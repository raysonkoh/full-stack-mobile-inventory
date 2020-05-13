const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/login', (req, res) => {
  const {username, password} = req.body.data;
  if (username === 'A' && password === 'B') {
    res.json({
      success: 'true'
    });
  } else {
    res.json({
      success: 'false'
    });
  }
})

app.get('/', (req, res) => {
  res.json({
    msg: 'Hello world!!!!!'
  });
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));
