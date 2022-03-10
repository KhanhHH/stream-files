const express = require("express");
const cors = require("cors");
const app = express();
const serveIndex = require('serve-index')


app.use(cors());
app.use(
  express
    .json
    // {limit: '5mb'}
    ()
);

app.get("/", async (req, res) => {
  return res.json("API running");
});

app.use("/files", serveIndex("files"));
app.use("/files", express.static("files"));

app.listen(8001, () => {
  console.log(
    `App listening at http://localhost:${8001}`
  );
});
