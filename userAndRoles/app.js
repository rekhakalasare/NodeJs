const express = require("express");
const app = express();

const routes = require("./routes");
const getMongoConnection = require('./model/connections/');


app.use(express.json());
app.use(express.urlencoded({extended:false}));
(()=>{
  getMongoConnection();
})();
app.use(routes);


app.listen(3000,(err)=>{
  if(err) console.log(err);
});

module.exports = app;