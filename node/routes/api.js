var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log("HELLO WORLD");
});
router.post('/', function(req, res, next) {
    a = req.body.data[0];
    b = req.body.data[1];
    console.log(a);
    console.log(b);
    fs.writeFile("input.txt",a + " " + b,(err)=>{
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
