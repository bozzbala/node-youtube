const Contact = require("../models/contact");
const express= require('express');
const createPath = require("../Helpers/create-path")
const router = express.Router();

router.get('/contacts', (req, res)=>{
    const title = "Contacts"
    Contact
        .find()
        .then((contacts) => res.render(createPath('contact'), {contacts, title}))
        .catch((error) => {
            console.log(error)
            res.render(createPath('error'), {title: 'Error'})
        })
})


module.exports = router;