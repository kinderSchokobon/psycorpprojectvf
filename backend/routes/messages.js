const router = require('express').Router();
let Message = require('../models/message.model');

router.route('/').get((req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const content = req.body.content;
    const date = Date.parse(req.body.date);
    const image = req.body.image;
    
    const newMessage = new Message({
        username,
        content,
        date,
        image,
    });
    
    newMessage.save()
        .then(() => res.json('Message added!'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {
    Message.findById(req.params.id)
        .then(message => res.json(message))
        .catch(err => res.status(400).json("Error: " + err));

})

router.route('/:id').delete((req, res) => {
    Message.findByIdAndDelete(req.params.id)
        .then(() => res.json("message deleted."))
        .catch(err => res.status(400).json("Error: " + err));
        
})

router.route('/update/:id').post((req, res) => {
    Message.findById(req.params.id)
        .then(message => {
            message.username = req.body.username;
            message.content = req.body.content;
            message.date = Date.parse(req.body.date);
            message.image = req.body.image;

            message.save()
                .then(() => res.json("message updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router