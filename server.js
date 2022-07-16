const express = require('express');
const apiRoutes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// static content
// app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// Static content
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});