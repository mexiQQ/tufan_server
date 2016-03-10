var mongoose = require('mongoose')

var storySchema = mongoose.Schema({
    udid: String,//require 
    imageUrl: String,//require 
    desc: String,
    isCheck: {type: Boolean, default: false },
    recommend: {type: String, defailt: ""},
    tabId: String,
    tab: {type: String, default: "推荐"},
    favor_count: {type: Number, default: 0 },
    favor_udid: [String],
    create_date:{ type: Date, default: Date.now },//require 
    update_date:{ type: Date, default: Date.now },//require 
    deleted: { type: Boolean,default: false },
})

var Story = mongoose.model('Story',storySchema);

