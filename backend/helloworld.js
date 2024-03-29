const express = require('express')
const app = express()
const port = 3001
const db = {}

app.use(express.json());

app.post('/newentry', (req, res) => {
  console.log("hello");
  console.log(req.body.key);
  console.log(req.body.value);
  const key = req.body.key;
  const value = req.body.value;
  db[key] = value;
  res.send('Entry added');
})

app.get('/getdb', (req, res) => {
    res.send(db);
})

app.get('/getvalue', (req, res) => {
    const key = req.body.key;
    res.send(db[key]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})