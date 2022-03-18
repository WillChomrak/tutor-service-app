const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const dbObj = require('../../database/conn');
const availableBookingTimes = require('../../logic/availableBookingTimes.js');

const router = express.Router();

// GET all bookings
router.get('/', (req, res) => {
    const db = dbObj.getDatabase();
    console.log('WE GOT THE REQUEST')
    db.collection('Appointment-collection').find().toArray()
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt GET err: ", err));
})

// GET all bookings filtered by date (and all tutors) - There is probably a cleaner way to call from two collections.. may return to this
router.get('/filtered', (req, res) => {
    const db = dbObj.getDatabase();

    // create date objects for the start and end(beginning of next day) of the req date; set time to 0 for both
    const _date = new Date(req.query.date);
    _date.setHours(0,0,0,0);
    let nextDate = new Date(req.query.date)
    nextDate.setHours(0,0,0,0);
    nextDate.setDate(nextDate.getDate() + 1);

    let bookings;
    let tutors;

    db.collection('Tutor-collection').find().toArray()
    .then(result => {
        tutors = result;
        db.collection("Appointment-collection").find({
            // filter results to only return bookings from the requested date
            date: {
                $gte: _date,
                $lt: nextDate
            }
            }).toArray() 
        .then(result => {
            bookings = result;
            console.log("this is the bookings result", bookings)
        })
        .then(() => {
            // pass to module to remove booked times from tutor avail array; send to front
            availableBookingTimes(tutors, bookings);
            res.send(tutors);
            
        })
        .catch(err => console.log("layer 2 booking time processing", err));
    })
    .catch(err => console.log("apt GET err: ", err)); 

})

// POST a booking
router.post('/', (req, res) => {
    const db = dbObj.getDatabase();
    const newApt = {
        date: new Date(req.body.date),
        fname: req.body.fname,
        lname: req.body.lname,
        subject: req.body.subject,
        tutor_id: ObjectID(req.body.tutor_id)
    }
    db.collection('Appointment-collection').insertOne(newApt)
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("apt POST err: ", err));
})



module.exports = router;