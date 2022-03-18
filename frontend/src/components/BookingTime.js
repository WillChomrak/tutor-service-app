import React, { useState} from 'react';

const BookingTime = (props) => {
  // const [time, setTime] = useState(new Date(props.time).getHours());
  const time = new Date(props.time).getHours();
  // the below calc should probably be done a level up... maybe
  return (
  <div className="bookingInput">
    {/* checked={props.setTimeChild(time)} */}
    <input type="radio" className="timeRadio"  data-tutorid={props.tutorID} onChange={props.onTimeChange} id={props.tutorID + "bookingTime" + time} name="time" value={time}></input>
    <label for={props.tutorID + "bookingTime" + time}>{props.tutorFname} - {time}:00   </label>

  </div>)
};

export default BookingTime;
