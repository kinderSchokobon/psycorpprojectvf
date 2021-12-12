const router = require('express').Router();
let Message = require('../models/message2.model');

router.route('/').get((req, res) => {
    Message.find()
        .then(messages => res.json(messages))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    const content = req.body.content;
    const image = req.body.image;
    const from = req.body.from;
    const to = req.body.to;

    
    const newMessage = new Message({
        content,
        image,
        from, 
        to,
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
            message.content = req.body.content;
            message.image = req.body.image;
            message.from = req.body.from;
            message.to = req.body.to;

            message.save()
                .then(() => res.json("message updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
})

module.exports = router