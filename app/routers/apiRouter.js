var express = require('express');
var router = express.Router();
var Hacker = require('../../app/models/hacker');

router.route('/hackers')
    .post(function(req,res){

        var hacker = new Hacker();
        hacker.name = req.body.name;
        hacker.alias = req.body.alias;

        hacker.save(function(err) {
            if(err){
                res.send(err);
            }
            res.json({message: 'New Hacker!'});
        })

    })
    .get(function(req,res){
        Hacker.find(function(err,hackers){
            if(err) {
                res.send(err);
            }
            res.json(hackers);
        })
    });

router.route('/hackers/:id')
    .get(function(req,res){
        Hacker.findById(req.params.id, function(err,hacker){
            if(err) {
                res.send(err);
            }
            res.json(hacker);
        })
    })
    .put(function(req,res){
        Hacker.findById(req.params.id, function(err,hacker){
            if(err) {
                res.send(err);
            }
            if(req.body.name) {
                hacker.name = req.body.name;
            }
            if(req.body.alias) {
                hacker.alias = req.body.alias;
            }

            hacker.save(function(err){
                if(err) {
                    res.send(err);
                }
                res.json({message: 'Hacker Updated'});
            })

        })
    })
    .delete(function(req,res){
        Hacker.remove({
            _id: req.params.id
        }, function(err, hacker) {
            if(err) {
                res.send(err);
            }
            res.json({message: 'Hacker removed'});
        })
    })

module.exports = router;
