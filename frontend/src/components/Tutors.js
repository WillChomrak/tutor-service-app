import '../Style/tutors.css';
import React, { useEffect, useState } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Users from './Users';
import tutor1 from '../img/tutor-1-test.jpg';

const Tutors = () => {

  return (
      <>
  <section id="tutors-top">
        <h1>Meet Our Tutors</h1>
    </section>
    <section id="tutors-bottom">
        <Row>
            <Col xs={12} sm={4}>
                <div className="tutors-col">
                    <Image style={{maxHeight: "150px", marginBottom: "20px"}} src={tutor1} roundedCircle></Image>
                    <p>Name</p>
                    <p>Education</p>
                    <p>Subjects</p>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="tutors-col">
                    <Image style={{maxHeight: "150px", marginBottom: "20px"}} src={tutor1} roundedCircle></Image>
                    <p>Name</p>
                    <p>Education</p>
                    <p>Subjects</p>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="tutors-col">
                    <Image style={{maxHeight: "150px", marginBottom: "20px"}} src={tutor1} roundedCircle></Image>
                    <p>Name</p>
                    <p>Education</p>
                    <p>Subjects</p>
                </div>
            </Col>
        </Row>
    </section>   
    </>    
  );
};



export default Tutors;
