var mongoose = require('mongoose');

var feedbackSchema = mongoose.Schema({
    username: {type :String},
    feedback: {type :String}
})

var feedbackModel = mongoose.model('feedbacks',feedbackSchema);

module.exports = feedbackModel;