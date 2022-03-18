
const formatSubjectData = subjects => {
    // create array of only subjects with value true.
    const allSubjectsArray = Object.keys(subjects);
    const subjectsArray = allSubjectsArray.filter(sub => subjects[sub] === true);

    return(subjectsArray);    
}

const formatAvailData = avail => {
    // create array of only times tutor is avail
    const allTimesArray = Object.keys(avail);
    const timesArray = allTimesArray.filter(timeSlot => avail[timeSlot] == true);
    const dateTimesArray = timesArray.map(time => {
        const timeNum = time.split("_")[1];
        const availDate = new Date(0);
        return new Date(availDate.setHours(timeNum));
    });
    // console.log("times array: ", dateTimesArray);

    return(dateTimesArray);
}

module.exports = {formatSubjectData, formatAvailData};