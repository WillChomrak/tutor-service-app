import React, { useState } from 'react';
import '../Style/book-lesson.css';
import "react-datepicker/dist/react-datepicker.css";
import { Row, Container, Col, Image } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import axios from 'axios';


const BookLesson = () => {
    const [date, setDate] = useState(new Date());

    const onDateChoice = (_date) => {
        console.log("something")
        setDate(_date);
        
        // getTimes();
    }

    // const getTimes = () => {
    // }

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const newApt = {
            date: "date",
            fname: e.target.fname.value,
            lname: e.target.lname.value,
            subject: e.target.subject.value
        }

        await axios.post('http://localhost:5000/api/appointments', newApt)
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
                    <label for="date">Date:</label><br />
                    <DatePicker selected={date} dateFormat="MM/dd/yyyy" onChange={_date => onDateChoice(_date)} />
                    <label for="fname">First name:</label><br />
                    <input className="booking-input" type="text" id="fname" name="fname" onChange={() => console.log(date.getDate())}></input><br />
                    <label for="lname">Last name:</label><br />
                    <input className="booking-input" type="text" id="lname" name="lname"></input>                    
                    <label for="subject">Subject</label><br />
                    <input className="booking-input" type="text" id="subject" name="subject"></input><br /><br />
                    <button type="submit">Book</button>

                </form>
            </Col>
        </Row>

    </Container>
  );
};

export default BookLesson;
