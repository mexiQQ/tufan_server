var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.json({
    "code":0,
    "msg":"",
    "result":[
      {
        "title":"饭仔",
        "num":11,
        "feature":"fanzai",
        "first":"http://tufan.b0.upaiyun.com/fanzai/fanzai9.png",
        "images":[
          "http://tufan.b0.upaiyun.com/fanzai/fanzai1.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai2.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai3.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai4.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai5.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai6.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai7.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai8.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai9.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai10.png",
          "http://tufan.b0.upaiyun.com/fanzai/fanzai11.png",
        ]
      },{
        "title":"蝌蚪娃",
        "num":20,
        "feature":"kedouwa",
        "first":"http://tufan.b0.upaiyun.com/kedouwa/love.png",
        "images":[
          "http://tufan.b0.upaiyun.com/kedouwa/vomit.png",
          "http://tufan.b0.upaiyun.com/kedouwa/thirst.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/sweat.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/startle.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/spook.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/slobber.png",
          "http://tufan.b0.upaiyun.com/kedouwa/question.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/love.png",
          "http://tufan.b0.upaiyun.com/kedouwa/fire.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/surprise.png",
          "http://tufan.b0.upaiyun.com/kedouwa/smile.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/shout.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/prettiness.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/miao.png", 
          "http://tufan.b0.upaiyun.com/kedouwa/grimace.png",
          "http://tufan.b0.upaiyun.com/kedouwa/cry.png",
          "http://tufan.b0.upaiyun.com/kedouwa/cool.png",
          "http://tufan.b0.upaiyun.com/kedouwa/confused.png",
          "http://tufan.b0.upaiyun.com/kedouwa/burn.png",
          "http://tufan.b0.upaiyun.com/kedouwa/anger.png",
        ]
      },{
        "title":"多啦A梦",
        "num":1,
        "feature":"duola",
        "first":"",
        "images":[
          "http://tufan.b0.upaiyun.com/duola/duola.png",
        ]
      }
    ]
  });
});

module.exports = router;
