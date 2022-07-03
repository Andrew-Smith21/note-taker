const express = require('express');

const PORT = process.env.PORT || 3001;












// static content
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});