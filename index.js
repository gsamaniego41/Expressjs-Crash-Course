const express = require("express");
const path = require("path"); //node.js module to deal with file paths

const app = express();

/* 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
}); 
*/
// we can load HTML files this way, but not ideal
// we'd have to put a route manually for every page

// express comes w/ functionality to make a folder a static folder
/* === Set a static folder === */
app.use(express.static(path.join(__dirname, "public")));
// .use() is used when we want to include MW

const PORT = process.env.PORT || 5000;
// when we deploy the server will most likely
// have the PORT # in an environment variable

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
