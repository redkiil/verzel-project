var mongoose = require('mongoose')

var Schema = mongoose.Schema

var modulesSchema = new Schema({
    name: String,
})
modulesSchema.virtual('classes', {
    ref: 'Class',
    localField: '_id',
    foreignField: 'module'
})
modulesSchema.set('toObject', { virtuals: true });
modulesSchema.set('toJSON', { virtuals: true });

const modules = mongoose.model('Modules', modulesSchema)
module.exports = modules