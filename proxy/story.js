var models = require('../lib/index')
var Story = models.Story;

exports.createAndSave = function(udid,desc,imageUrl,fn){
  var story = new Story({
    "udid": udid,
    "desc": desc,
    "imageUrl": imageUrl 
  });
  story.save(fn);
}

exports.getStoriesList = function(first,maxCount,fn){
  var skip;
  if(first <= 0){
    skip = 0;
  }else{
    skip = first - 1; 
  }

  Story.find({deleted:false,isCheck:true},{},{ skip:skip,limit:maxCount,sort:"-is_top -create_date" },function(err,stories){
    if(err) return fn(err);
    fn(err,stories);
  });
}

exports.getDetailStory = function(_id,fn){
  Story.findById(_id,function(err,story){
    if(err) return fn(err);
    fn(err,story);
  });
}

exports.favorStory = function(_id,udid,fn){
  Story.update({'_id':_id},{'$inc':{'favor_count':1},'$push':{'favor_udid':udid}},function(err,result){
    if(err) return fn(err);
    fn(null,result);
  })
}

exports.defavorStory = function(_id,udid,fn){
  Story.update({'_id':_id},{'$inc':{'favor_count':-1},'$pull':{'favor_udid':udid}},function(err,result){
    if(err) return fn(err);
    fn(null,result);
  })
}

