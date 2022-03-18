import React, { useState } from 'react';
import '../Style/book-lesson.css';
import "react-datepicker/dist/react-datepicker.css";
import { Row, Container, Col, Image, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import BookingTimes from './BookingTimes';
import axios from 'axios';


const BookLesson = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [tutorID, setTutorID] = useState();
    const [ tutors, setTutors ] = useState();
    const [ bookingsForSelectedDate, setBookingsForSelectedDate ] = useState();
    const [ tutorAvailability, setTutorAvailability ] = useState();


    const onDateChoice = (_date) => {
        console.log("on date choice")
        setDate(_date);
        // getTutors();
        // getFilteredBookings(_date);
        getTutorAvailability(_date);
        }

    // const getTutors = async () => {
    //     await axios.get('http://localhost:5000/api/tutors')
    //     .then(res => {
    //         setTutors(res.data);
    //         // more here
    //     }).catch(err => console.log("getTutors err: ", err))

    // }

    // const getFilteredBookings = async (date) => {
    //     console.log('getFilteredBookings');
    //     await axios.get(`http://localhost:5000/api/bookings/filtered?date=${date}`)
    //     .then(res => {
    //         setBookingsForSelectedDate(res.data);
    //         // more here
    //         console.log("res.data: ", bookingsForSelectedDate);
    //     }).catch(err => console.log("getTutors err: ", err))
    // }

        // This should become "getAvailableTimes" or something like this.
        // confirmed this is a date object and it is being passed to route
    const getTutorAvailability = async (date) => {
        console.log("get tutr avil: ", date);
        await axios.get(`http://localhost:5000/api/bookings/filtered?date=${date}`)
        .then(res => {
            // setBookingsForSelectedDate(res.data); // 
            setTutors(res.data);
            console.log("tutor avail res: ", res.data);
        }).catch(err => console.log("getTutors err: ", err))
    }

    const onTimeChange = e => {
        setTime(e.currentTarget.value);
        setTutorID(e.target.dataset.tutorid);
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        
        const newApt = {
            date: new Date(date.setHours(time, 0, 0, 0)), 
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            subject: e.target.subject.value,
            tutor_id: tutorID
        }
        await axios.post('http://localhost:5000/api/bookings', newApt)
        .then(res => {
            // setUsers(res.data);
            console.log("APT RES: ", res.data); // I still don't understand why this logs before the state is updated
        })
        .catch(err => console.log("THE RES ERR: ", err));
    }

  return (
    <Container>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>

                <form onSubmit={onFormSubmit} className="book-form">
                    <label for="date">Date:</label>
                    <DatePicker id="datepicker" name="datepicker" selected={date} dateFormat="MM/dd/yyyy" onChange={_date => onDateChoice(_date)} />
                    {time ? <span>You selected: {time}</span> : <span>no time selected</span>}
                    <br />
                    {tutors ? <span><label for="time">Time</label><br /><BookingTimes data={tutors}  onTimeChange={onTimeChange} /></span> : <span>nothing</span>}
                    <br />
                    <input placeholder="First name" className="booking-input" type="text" id="fname" name="fname" required></input><br />
                    <input className="booking-input" placeholder="Last name" type="text" id="lname" name="lname" required></input><br />                  
                    <input className="booking-input" placeholder="Subject" type="text" id="subject" name="subject" required></input><br /><br />
                    { time ? <Button style={{backgroundColor: "#a850b3", border: "0px", fontSize: "1.3em", padding: "5px 10px 10px 10px"}} type="submit">Book</Button> : <p>Please select a date, time, and fill all fields</p>}

                </form>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
               <div>
                {/* {tutors ? tutors.map(tutor => <p>{tutor.availability}  </p>) : <p>nothin</p>}   */}
                </div> 
                <div>
                    {/* <button onClick={() => console.log(new Date(bookingsForSelectedDate).getDate())}>get filtered bookings</button> */}
                {tutors ? <p>some bookings</p> : <p>no bookings yet</p>}  

                </div>
            </Col>
        </Row>

    </Container>
  );
};

export default BookLesson;
