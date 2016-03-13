var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');

var User = require('./../models/users.js');

var newUser = User({
    name:'Amanda Field',
    email:'afield@brainstation.io',
    password: '1'
});

newUser.save(function(err){
    if (err) {
            console.log(err)
        } else {
            console.log('User created!');
            res.json(newUser);
        }
});

router.post('/login',function(req,res){
      console.log(req.body);
    User.findOne({email: req.body.email, password:req.body.password}, function(err, user) {
	    if (err) {
	        console.log(err);
	        res.json({status:400,err:err});
	    } else {
	    	var token = jwt.sign(user,'Fv1f3Y37S3RorBbT4PumpWVHejaEYnGs');
			res.set('authentication',token);
	        res.json({
	        	user:user
	        });
	    }
	});
});

module.exports = router;
