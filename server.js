const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000;


//important! connect to mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes"));

app.listen(PORT, ()=> console.log("app is running!"))