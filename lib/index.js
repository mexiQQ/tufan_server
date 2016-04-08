var mongoose = require('mongoose')
mongoose.connect('mongodb://104.131.144.1/tufan_server')

require('./story');

exports.Story = mongoose.model("Story");
