var proxy = require("../proxy/index");
var Story = proxy.Story;

exports.list = function(req,res,next){
  var data = req.body; 
  Story.getStoriesList(data.first,data.maxCount,function(err,stories){
    if(err) return next(err);
    res.json({status: 0,result:stories});
  });
}

exports.submit = function(req,res,next){
  var data = req.body;
  Story.createAndSave(data.udid,data.desc,data.imageUrl,function(err,story){
    if(err) return next(err)
    res.json({status: 0,result:story});
  })
}


exports.detail = function(req,res,next){
  var _id = req.params['id'];
  Story.getDetailStory(_id,function(err,story){
    if(err) return next(err)
    res.json({status:0,result:story});
  })
}

exports.favor = function(req,res,next){
  var _id = req.params['id'];
  var data = req.body;
  Story.favorStory(_id,data.udid,function(err,result){
    if(err) return next(err); 
    res.json({status:0,result:result});
  });
}

exports.defavor = function(req,res,next){
  var _id = req.params['id'];
  var data = req.body;
  Story.defavorStory(_id,data.udid,function(err,result){
    if(err) return next(err); 
    res.json({status:0,result:result});
  });
}

