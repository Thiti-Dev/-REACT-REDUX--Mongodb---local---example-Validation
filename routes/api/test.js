const express = require('express');
const router = express.Router();

// Load Test model
const Test = require('../../models/Test');
// Load Input Validation
const validateTestInput = require('../../validation/test');

// @route       GET api/users/test
// @desc        Tests users route
// @access      Public

router.get('/', (req, res) => {
    res.json({ msg: "Users Works" })
});

// @route       POST api/test/create-user
// @desc        Create user
// @access      Public
router.post('/create-user', (req,res) => {
    const { errors, isValid } = validateTestInput(req.body);

    //Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newUser = new Test({
        name: req.body.name
    });
    newUser.save()
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
})


// @route       GET api/test/find-user/:name
// @desc        Delete user and Profile
// @access      Public
router.get('/find-user/:name', (req, res) => {
    Test.findOne({name: req.params.name})
        .then(user => {
            if (user) {
                res.json(user);
            }
            else {
                res.status(400).json({ user: "User not found" })
            }
        })
        .catch(err => {
            console.log(err)
        })
})

// @route       GET api/test/remove-user/:name
// @desc        Delete user and Profile
// @access      Public
router.get('/remove-user/:name', (req, res) => {
    Test.findOneAndRemove({name:req.params.name})
        .then(() => {
            res.json({success: true})
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router