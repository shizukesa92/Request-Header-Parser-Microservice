const express = require("express");
const app = express();
const http = require("http");
const api = require("./server/routes/api");

app.use("/api/", api);


app.listen(process.env.PORT || 3000);
