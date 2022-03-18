const Tutor = {
    _id: "generated num",
    fname: "Will",
    lname: "Chomrak",
    email: "wchomrak@gmail.com",
    country: "Canada",
    city: "Radium Hot Springs",
    paymentInformation: "?",
    subjects: ["math", "python", "javascript", "accounting", "marketing", "economics"],
    availability: {
        0: ["07:00", "07:30", "08:00", "08:30", "09:00", 
        "09:30", "10:00", "10:30", "11:00", "11:30", "12:00",
        "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
        "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
        "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
        "21:30"],
        1: "timestamps",
        2: "timestamps",
        3: "timestamps",
        4: "timestamps",
        5: "timestamps",
        6: "timestamps",
    },
    dateStarted: "timestamp",
    dateEnded: "timestamp"
}

const TutorFeb28 = {
    // _id: "generated num",
    fname: "Will",
    lname: "Chomrak",
    email: "wchomrak@gmail.com",
    country: "Canada",
    city: "Radium Hot Springs",
    subjects: ["math", "python", "javascript", "accounting", "marketing", "economics"],
    availability: [
        ["Wed Dec 31 1969 11:00:00 GMT-0500 (Eastern Standard Time)", "Wed Dec 31 1969 12:00:00 GMT-0500 (Eastern Standard Time)"],
        ["Wed Dec 31 1969 13:00:00 GMT-0500 (Eastern Standard Time)", "Wed Dec 31 1969 14:00:00 GMT-0500 (Eastern Standard Time)"]
    ],
    dateStarted: new Date(),
    dateEnded: ""
}

const booking = {
    _id: "generated num",
    tutorID: "Id of tutor",
    studentID: "Id of student",
    startTime: "timestamp",
    endTime: "timestamp",
    subject: "math",
    notes: "long note of session requirements"
}

const Student = {
    _id: "generated num",
    fname: "Will",
    lname: "Chomrak",
    email: "wchomrak@gmail.com",
    country: "Canada",
    city: "Radium Hot Springs",
     dateStarted: "timestamp",
    dateEnded: "timestamp"
}


