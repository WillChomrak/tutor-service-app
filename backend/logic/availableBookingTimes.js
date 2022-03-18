
const availableBookingTimes = (tutors, bookings) => {

    // iterate through each booking
    bookings.forEach( booking => {
        // iterate through each tutor to match the tutor to the tutor_id on the booking
        tutors.forEach(tutor => {
            // match the correct tutor - convert both to strings for matching - NEED ERR if there is no match
            if (tutor["_id"].toString() === booking["tutor_id"].toString()) { 
                // iterate through all avail times
                tutor["availability"].forEach((avail, i) => {
                    // match the correct avail time to booking time - convert to hrs because the dates are different
                    if (avail.getHours() === booking["date"].getHours()) {
                        // remove the booked time from the array of tutor avail times
                        tutor["availability"].splice(i, 1);
                    }
                })
            }
        })
    })

    return(tutors); 
}

module.exports = availableBookingTimes;