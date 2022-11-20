'use strict';
const {expect} = require("chai");
const sinon = require('sinon');
const userModel = require("../model/");
const httpMocks = require("node-mocks-http");

describe("route unit test",function(){
    describe("create user",function(){
        it("save user successfully",function(){
          const reqBody = {
            user:"rekha",
            roles:[
              {
                role:{
                role:"suggestionReadOnly",
                privileges:[
                  {
                    resource:{
                      role:"read",
                      db:"aggrsample",
                      collection:"test"
                  }
                  }
                ]
              }
          }],
            db:"aggrsample"
          };
          const resBody = {
            user:"rekha"
          };

         const req = httpMocks.createRequest(reqBody);
         const res = httpMocks.createResponse(resBody);
         const nextSpy = sinon.spy();//callback
         sinon.stub(userModel,"create").returns(null,res);
        //call route func like fun(rq,res,nextSpy);
        //now perform assertions using expect
         userModel.create.restore();

        });

    });
});