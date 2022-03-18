const express = require('express');
const dbObj = require('../../database/conn');
const { formatSubjectData, formatAvailData } = require('../../logic/formatUserData');

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

// POST an apt
// router.post('/', (req, res) => {
//     console.log("WE MADE IT TO THE RIGHT FUNCTION")
//     console.log(req.body);
//     const db = dbObj.getDatabase();
//     const newApt = {
//         date: req.body.date,
//         fname: req.body.fname,
//         lname: req.body.lname,
//         subject: req.body.subject
//     }

//     db.collection('Tutor-collection').insertOne(newApt)
//     .then(result => {
//         res.json(result);
//     })
//     .catch(err => console.log("apt POST err: ", err));
// })

// POST a tutor
router.post('/', (req, res) => {
    console.log("WE MADE IT TO THE RIGHT FUNCTION")
    // console.log(req.body);
    const db = dbObj.getDatabase();

    // likely require a module here to complete the date time obj creation
    // I could simply pass the who availability to this mod and return a list of start times
    // should I parse the key? from ex. time6 into int(6) or whatever? or pass each value from front end as a list like [True, 6]
    // const [subjects, availability] = formatTutorData(req.body.subjects, req.body.availability);
    const subjects = formatSubjectData(req.body.subjects);
    const availability = formatAvailData(req.body.availability);

    const newTut = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        city: req.body.city,
        country: req.body.country,
        profile: req.body.profile,
        subjects: subjects,
        availability: availability
    }
    console.log("file upload: ", req.body.profile); 

    db.collection('Tutor-collection').insertOne(newTut)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt POST err: ", err));
})



module.exports = router;