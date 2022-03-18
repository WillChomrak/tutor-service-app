const express = require('express');
const dbObj = require('../../database/conn');
const { formatSubjectData } = require('../../logic/formatUserData');

const router = express.Router();


// GET all records
router.get('/', (req, res) => {
    const db = dbObj.getDatabase();
    console.log('WE GOT THE REQUEST')
    db.collection('Tutor-collection').find().toArray()
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt GET err: ", err));
})

// POST a student
router.post('/', (req, res) => {
    console.log("student POST route")
    // console.log(req.body);
    const db = dbObj.getDatabase();

    const subjects = formatSubjectData(req.body.subjects);

    const newStudent = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        city: req.body.city,
        country: req.body.country,
        subjects: subjects
    }
    console.log("student test: ", newStudent); 

    db.collection('Student-collection').insertOne(newStudent)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt POST err: ", err));
})



module.exports = router;