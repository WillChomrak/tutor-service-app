import '../Style/home.css';
import React, { useEffect, useState } from 'react';
import { Image, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

import book from '../img/book-icon.png';
import code from '../img/code-icon.png';
import math from '../img/math-icon.png';
import language from '../img/language-icon.png';


const Home = () => {

    // const [ users, setUsers ] = useState([{name: "", address: "", time: ""}]);
    // const [ showUsers, setShowUsers ] = useState(false);

    // useEffect(async () => {
        
    //     await axios.get('http://localhost:5000/api/users')
    //     .then(res => {
    //         setUsers(res.data);
    //         console.log("USERS RES: ", users); // I still don't understand why this logs before the state is updated
    //     })
    //     .catch(err => console.log("THE RES ERR: ", err))
    // }, []);

    // const renderUsers = () => {
    //     setShowUsers(!showUsers);
    // }
    const imgStyle = {maxHeight: "130px", marginBottom: "20px"}
  return (
      <>
  <section id="home-top">
        <h1 style={{fontSize: "3.4rem"}}>Tutor Company Full-Service App</h1>
        {/* <button onClick={() => renderUsers()}>
            Toggle users
        </button> */}
            {/* {showUsers ? <Users data={users} /> : <p></p>} */}
    </section>
    <section id="home-bottom">
        <Row style={{marginBottom: "100px"}}>
            <Col md={3}>
                <Image style={imgStyle} src={book}></Image>
            </Col>
            <Col md={3}>
                <Image style={imgStyle} src={math}></Image>
            </Col>
            <Col md={3}>
                <Image style={imgStyle} src={code}></Image>
            </Col>
            <Col md={3}>
                <Image style={imgStyle} src={language}></Image>
            </Col>
        </Row>
        <Row>
            <Col sm={{span: 4, offset: 2}}>
       <Button style={{backgroundColor:"#5ed9fe", border: "0px", color: "#404040", fontSize: "1.3em", padding: "5px 10px 10px 10px"}}>Learn with us</Button>
       {/*  #d0e8ff*/}
            </Col>
            <Col sm={4}>
       <Button style={{backgroundColor:"#fee65e", border: "0px", color: "#404040", fontSize: "1.3em", padding: "5px 10px 10px 10px"}}>Teach with us</Button>

            </Col>
        </Row>
    </section>   
    </>    
  );
};



export default Home;
