var mongoose = require('mongoose')

var storySchema = mongoose.Schema({
    udid: String,//require 
    imageUrl: String,//require 
    desc: String,//require    
    create_date:{ type: Date, default: Date.now },//require 
    update_date:{ type: Date, default: Date.now },//require 
    deleted: { type: Boolean,default: false },
})

var Story = mongoose.model('Story',storySchema);

