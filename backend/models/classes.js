var mongoose = require('mongoose')

var Schema = mongoose.Schema

var classSchema = new Schema({
    name: String,
    module: { type: Schema.Types.ObjectId, ref: 'Modules' },
    date: Date,
})

const classes = mongoose.model('Class', classSchema)
module.exports = classes