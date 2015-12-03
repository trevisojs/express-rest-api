var express = require('express');
var router = express.Router();
var Hacker = require('../../app/models/hacker');

router.get('/', function(req,res){
    res.render('index', {title: 'Treviso JS Homepage'});
})
router.get('/hackers', function(req,res){
    Hacker.find(function(err,hackers){
        if(err) {
            res.send(err);
        }
        res.render('hackers', { hackers: hackers });
    })
})
router.get('/hackers/:name', function(req,res){
    Hacker.find({name:req.params.name}, function(err,hackers){
        if(err) {
            res.send(err);
        }
        res.render('hacker', { hacker: hackers[0] });
    })
})


module.exports = router;
