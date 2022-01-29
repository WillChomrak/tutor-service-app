const express = require('express');
const dbObj = require('../../database/conn');

const router = express.Router();


// GET all records
router.get('/', (req, res) => {
    const db = dbObj.getDatabase();
    console.log('WE GOT THE REQUEST')
    db.collection('Appointment-collection').find().toArray()
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt GET err: ", err));
})

// POST an apt
router.post('/', (req, res) => {
    console.log("WE MADE IT TO THE RIGHT FUNCTION")
    console.log(req.body);
    const db = dbObj.getDatabase();
    const newApt = {
        date: req.body.date,
        fname: req.body.fname,
        lname: req.body.lname,
        subject: req.body.subject
    }

    // if (!newItem.itemName || !newItem.quantity) {
    //     return res.status(400).json({msg: "Please include a value both Item name and Quantity fields"})
    // };

    db.collection('Appointment-collection').insertOne(newApt)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt POST err: ", err));
})



module.exports = router;