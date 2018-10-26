var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("HELLO WORLD");
});
router.post('/', function(req, res, next) {
    arr = "";
    for(i = 0; i < 21; ++i){
        arr = arr + req.body.data[i];
        if(i+1 < 21)arr = arr+','
    }
    fs.writeFile("input.csv",arr,(err)=>{
        if(err){
            console.log("SOME ERROR");
        }
        res.json({
            status: 200
        })
    });
    // console.log(a+b);

});

module.exports = router;
