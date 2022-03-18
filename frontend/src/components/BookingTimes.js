import React from 'react';
import BookingTime from './BookingTime';

const BookingTimes = (props) => {
  const tutors = props.data;
  return (
    <div>
    {tutors.map(tutor => {
      return tutor["availability"].map((x, i) => {
        return (
        <BookingTime tutorFname={tutor.fname}  tutorID={tutor._id} onTimeChange={props.onTimeChange} time={x} key={i} />
        )
      })
    })
    }
    </div>
  );
};

export default BookingTimes;
