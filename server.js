//Boot up express
const express = require('express');
//Use Express
const app = express();

//API Route for the JSON print
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
  });

//Set the port to 3000
const PORT = process.env.PORT || 3000;

// Start the server and log a message
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});