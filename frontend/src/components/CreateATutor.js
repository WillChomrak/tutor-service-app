import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import FormBasicFields from './FormBasicFields';
import FormSubjectFields from './FormSubjectFields';


const onFormSubmit = async (e) => {
  e.preventDefault();
  
  const newTutor = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      city: e.target.city.value,
      country: e.target.country.value,
      profile: e.target.profileFile.files[0],
      subjects: {
        math: e.target.math.checked,
        science: e.target.science.checked,
        english: e.target.english.checked,
        spanish: e.target.spanish.checked,
        coding: e.target.coding.checked
      },
      availability: {
        time_5: e.target.time5.checked,
        time_6: e.target.time6.checked,
        time_7: e.target.time7.checked,
        time_8: e.target.time8.checked,
        time_9: e.target.time9.checked,
        time_10: e.target.time10.checked,
        time_11: e.target.time11.checked,
        time_12: e.target.time12.checked,
        time_13: e.target.time13.checked,
        time_14: e.target.time14.checked,
        time_15: e.target.time15.checked,
        time_16: e.target.time16.checked,
        time_17: e.target.time17.checked,
        time_18: e.target.time18.checked,
        time_19: e.target.time19.checked,
        time_20: e.target.time20.checked,
        time_21: e.target.time21.checked,

      }
  }
  // console.log(newTutor.subjects);
  // console.log(newTutor.availability);
  await axios.post('http://localhost:5000/api/tutors', newTutor)
  .then(res => {
      console.log("APT RES: ", res.data); 
  })
  .catch(err => console.log("THE RES ERR: ", err));
}

const CreateATutor = () => {
  return (
    <Container>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>
                <form onSubmit={onFormSubmit} className="book-form">
                    <h1 style={{marginBottom: "25px"}}>Create a tutor (admin access only)</h1>
                    {/* <Row>
                      <Col lg={{span: 4, offset: 2}}>
                        <input className="tutor-input" placeholder="First name" type="text" id="fname" name="fname" required></input>
                      </Col>
                      <Col lg={4}>
                         <input className="tutor-input" placeholder="Last name" type="text" id="lname" name="lname" required></input>  <br />                  
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={{span: 8, offset: 2}}>
                        <input className="tutor-input" placeholder="Email" type="text" id="email" name="email" required></input><br />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={{span: 8, offset: 2}}>
                        <input className="tutor-input" placeholder="City" type="text" id="city" name="city" required></input><br />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={{span: 8, offset: 2}}>
                        <input className="tutor-input" placeholder="Email" type="text" id="email" name="email" required></input><br />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={{span: 8, offset: 2}}>
                        <input className="tutor-input" placeholder="Country" type="text" id="country" name="country" required></input>  <br />   
                      </Col>
                    </Row>
                    <br />
                    <hr />   */}
                    <FormBasicFields />
                    <label for="profileFile" class="btn">Upload a profile picture:</label>
                    <input type="file" id="profileFile" name="profileFile" accept="image/png, image/jpeg"></input><br /><br />
                    {/* <h2 className="form-h2">Subjects</h2>
                    <Row>
                      <Col md={{span: 2, offset: 3}}>
                      <input type="checkbox" className="subjectCheck" id="math" name="subjects" value="math"></input>
                      <label for="math">Math</label>
                      </Col>
                      <Col md={{span: 2}}>
                      <input type="checkbox" className="subjectCheck" id="science" name="subjects" value="science"></input>
                    <label for="science">Science</label>
                      </Col>
                      <Col md={{span: 2}}>
                      <input type="checkbox" className="subjectCheck" id="english" name="subjects" value="english"></input>
                    <label for="english">English</label><br />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={{span: 2, offset: 3}}>
                      <input type="checkbox" className="subjectCheck" id="spanish" name="subjects" value="spanish"></input>
                    <label for="spanish">Spanish</label><br />
                      </Col>
                      <Col md={{span: 2}}>
                      <input type="checkbox" className="subjectCheck" id="coding" name="subjects" value="coding"></input>
                    <label for="coding">Coding</label><br />
                      </Col>
                    </Row>
                    <br />
                    <hr /> */}
                    <FormSubjectFields />
                    <h2 className="form-h2">Availability</h2>
                    <Row>
                      <Col lg={6}>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time5" name="availability" value="time5"></input>
                        <label for="time5">5:00am - 6:00am</label>
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time6" name="availability" value="time6"></input>
                        <label for="time6">6:00am - 7:00am</label>
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time7" name="availability" value="time7"></input>
                        <label for="time7">7:00am - 8:00am</label>
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time8" name="availability" value="time8"></input>
                        <label for="time8">8:00am - 9:00am</label>
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time9" name="availability" value="time9"></input>
                        <label for="time9">9:00am - 10:00am</label>
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time10" name="availability" value="time10"></input>
                        <label for="time10">10:00am - 11:00am</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time11" name="availability" value="time11"></input>
                        <label for="time11">11:00am - 12:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time12" name="availability" value="time12"></input>
                        <label for="time12">12:00pm - 1:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time13" name="availability" value="time13"></input>
                        <label for="time13">1:00pm - 2:00pm</label><br />
                      </span>
                      </Col>
                      <Col lg={6}>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time14" name="availability" value="time14"></input>
                        <label for="time14">2:00pm - 3:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time15" name="availability" value="time15"></input>
                        <label for="time15">3:00pm - 4:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time16" name="availability" value="time16"></input>
                        <label for="time16">4:00pm - 5:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time17" name="availability" value="time17"></input>
                        <label for="time17">5:00pm - 6:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time18" name="availability" value="time18"></input>
                        <label for="time18">6:00pm - 7:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time19" name="availability" value="time19"></input>
                        <label for="time19">7:00pm - 8:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time20" name="availability" value="time20"></input>
                        <label for="time20">8:00pm - 9:00pm</label><br />
                      </span>
                      <span className="availInput">
                        <input type="checkbox" className="availCheck" id="time21" name="availability" value="time21"></input>
                        <label for="time21">9:00pm - 10:00pm</label><br />
                      </span>
                      </Col>
                    </Row>
                    <br />
                    {/* <button type="submit">Sign up</button> */}
                    <Button style={{backgroundColor:"#a850b3", border: "0px", fontSize: "1.3em", padding: "5px 10px 10px 10px"}} type="submit">Submit</Button>
                </form>
            </Col>
        </Row>
        

    </Container>
  )
};

export default CreateATutor;
