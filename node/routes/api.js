var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("HELLO WORLD");
});
router.post('/', function(req, res, next) {
    arr = "";
    for(i = 0; i < 21; ++i){
        arr = arr + "A";
        if(i+1 < 21)arr = arr+','
    }
    fs.writeFile("input.csv",arr,(err)=>{
        if(err){
            console.log("SOME ERROR");
            res.json({
                status: 'error',
                error: err
            });
        }
    });
    arr += "\n"
    for(i = 0; i < 21; ++i){
        arr = arr + req.body.data[i];
        if(i+1 < 21)arr = arr+','
    }
    fs.writeFile("input.csv",arr,(err)=>{
        if(err){
            console.log("SOME ERROR");
            res.json({
                status: 'error',
                error: err
            });
        }
    });
    var content = ""
    fs.readFile('output.txt','utf-8',(err,result)=>{
        result = parseFloat(result)
        console.log(result);
        if(result > 0.5){
            result = 1;
        }else{
            result = 0;
        }
        if(err){
            res.json({
                status: 'error',
                error: err
            });
        }else{
            res.json({
                status: 'success',
                result: result
            })
            
        }
    });
    console.log(content);
});

module.exports = router;
