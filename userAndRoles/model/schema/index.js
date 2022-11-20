const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema({
    user:String,
    roles:[
        {
            role:{
                role:String,
                privileges:[
                    {
                        resource:{
                            role:String,
                            db:String,
                            collection:String
                        },
                        actions:Array
                    }
                ]
            },
            db:String
        }
    ]
});

module.exports = userSchema;