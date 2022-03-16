const classModel = require('../models/classes')
const moduleModel = require('../models/modules')
exports.show_all = function(req, res){
    classModel.find({}, function(err, data){
        if(err)return res.send(err)
        res.send(data)
    }).populate('module')
}
exports.show_specific = function(req, res){
    classModel.findOne({_id: req.params.id}).populate('module').exec(function(err,data){//todo: select to exclude some unnecessary items
        if(err)return console.error(err)
        res.send(data);
    })
}
exports.create = function(req, res){
    var module = moduleModel.findOneAndUpdate({_id: req.body.module})
    const classe = new classModel(req.body)
    classe.save(function(err){
        if(err)console.error(err)
        console.log(module)
        res.send('classe created')
    })
}
exports.update = function(req, res){
    classModel.findOneAndUpdate({_id: req.params.id}, req.body, function(err,data){
        if(err)return res.send(err)
        res.send('item updated')
    });
}
exports.delete = function(req, res){
    classModel.deleteOne({_id: req.params.id}, function(err){
        if(err)return res.send('error delete')
        res.send('class has been deleted')
    })
}