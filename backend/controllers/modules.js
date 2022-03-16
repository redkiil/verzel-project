const modulesModel = require('../models/modules')

exports.show_all = function(req, res){
    modulesModel.find({}, function(err, data){
        if(err)return res.send(err)
        res.send(data)
    }).populate('classes')
}
exports.show_specific = function(req, res){
    modulesModel.findOne({name: req.params.name}).populate('classes').exec(function(err,data){//todo: select to exclude some unnecessary items
        if(err)return console.error(err)
        res.send(data);
    })
}
exports.create = function(req, res){
    console.log(req.body)
    const module = new modulesModel(req.body)
    module.save(function(err){
        if(err)console.error(err)
        res.send('module created')
    })
}
exports.update = function(req, res){
    console.log("PATCH", req.body)
    modulesModel.findOneAndUpdate({_id: req.params.id}, req.body, function(err,data){
        if(err)return res.send(err)
        res.send('item updated')
    });
}
exports.delete = function(req, res){
    modulesModel.deleteOne({_id: req.params.id}, function(err){
        if(err)return res.send('error delete')
        res.send('module has been deleted')
    })
}