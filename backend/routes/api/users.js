const express = require('express');
const dbObj = require('../../database/conn');

const router = express.Router();


// GET all records
router.get('/', (req, res) => {
    const db = dbObj.getDatabase();
    console.log('WE GOT THE REQUEST')
    db.collection('User-collection').find().toArray()
    .then(result => {
        res.json(result);
    })
    .catch(err => console.log("GET err: ", err));
})

module.exports = router;