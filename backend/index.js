const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { connectMongoose, User , Video } = require("./db.js");
// const cors = require("cors");

connectMongoose();
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("server is live");
})

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log("App is running on port http://localhost:5500");
});
