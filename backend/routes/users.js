const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const mail = req.body.mail;

    const newUser = new User({username, password, mail});
    
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json("user deleted."))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(User => res.json(User))
        .catch(err => res.status(400).json("Error: " + err));

});

module.exports = router