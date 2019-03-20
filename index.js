const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

// .send() - sends text to the browser

const PORT = process.env.PORT || 5000;
// when we deploy the server will most likely
// have the PORT # in an environment variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
