const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Travel Booking App ✈️');
});

app.get('/destinations', (req, res) => {
  res.json([
    { id: 1, name: "Goa" },
    { id: 2, name: "Manali" },
    { id: 3, name: "Dubai" }
  ]);
});

app.listen(port, () => {
  console.log(`Travel app running at http://localhost:${port}`);
});
