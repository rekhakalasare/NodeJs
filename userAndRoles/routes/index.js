const express = require("express");
const routes = express.Router();
const userModel = require("../model/");
const {checkSchema} = require("express-validator");

routes.post("/user/create", (req,res)=>{
 const reqBody = req.body;
 userModel.create(reqBody,(err,data)=>{
   if(err) res.status(400).json({
      message:"user creation failed"
   });
   else res.status(200).json({
      message:"user created successfully",
      data
   });
 });
});

module.exports = routes;