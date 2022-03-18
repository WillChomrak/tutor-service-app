import React from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import FormBasicFields from './FormBasicFields';
import FormSubjectFields from './FormSubjectFields';


const onFormSubmit = async (e) => {
  e.preventDefault();
  // console.log(e.target.math);
  
  const newStudent = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      city: e.target.city.value,
      country: e.target.country.value,
      subjects: {
        math: e.target.math.checked,
        science: e.target.science.checked,
        english: e.target.english.checked,
        spanish: e.target.spanish.checked,
        coding: e.target.coding.checked
      }
  }
  console.log(newStudent.subjects);
  await axios.post('http://localhost:5000/api/students', newStudent)
  .then(res => {
      console.log("APT RES: ", res); // res.data
  })
  .catch(err => console.log("THE RES ERR: ", err));
}

const StudentSignUp = () => {
  return (
    <Container>
        <Row>
            <Col md={{ span: 8, offset: 2 }}>

                <form onSubmit={onFormSubmit} className="book-form">
                <h1 style={{marginBottom: "25px"}}>Sign up to learn with us</h1>
                    
                  <FormBasicFields />
                    {/* <h2 className="form-h2">Subjects</h2>                  
                    <input type="checkbox" className="subjectCheck" id="math" name="subjects" value="math"></input>
                    <label for="math">Math</label><br />
                    <input type="checkbox" className="subjectCheck" id="science" name="subjects" value="science"></input>
                    <label for="science">Science</label><br />
                    <input type="checkbox" className="subjectCheck" id="english" name="subjects" value="english"></input>
                    <label for="english">English</label><br />
                    <input type="checkbox" className="subjectCheck" id="spanish" name="subjects" value="spanish"></input>
                    <label for="spanish">Spanish</label><br />
                    <input type="checkbox" className="subjectCheck" id="coding" name="subjects" value="coding"></input>
                    <label for="coding">Coding</label><br />
                    <br /> */}
                  <FormSubjectFields />
                    
                    <br />
                    {/* <button style={{}} type="submit">Sign up</button> */}
                    <Button style={{backgroundColor:"#a850b3", border: "0px", fontSize: "1.3em", padding: "5px 10px 10px 10px"}} type="submit">Sign up</Button>
                </form>
            </Col>
        </Row>
        

    </Container>
  )
};

export default StudentSignUp;
