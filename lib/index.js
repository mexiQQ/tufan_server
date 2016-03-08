var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/tufan_server')

require('./story');

exports.Story = mongoose.model("Story");
