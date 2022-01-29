const express = require('express');
const path = require('path');
const dbObj = require('./database/conn');
const cors = require('cors');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/appointments', require('./routes/api/appointments'));



const PORT = process.env.PORT || 5000;


dbObj.connectToServer(function (err){
    if (err) {
        console.log(err);
        process.exit()
    }
    app.listen(PORT, () => {
        console.log('Server is running on port', PORT)
    })

})
