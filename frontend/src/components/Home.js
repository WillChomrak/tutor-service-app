import '../Style/home.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';

const Home = () => {

    const [ users, setUsers ] = useState([{name: "", address: "", time: ""}]);
    const [ showUsers, setShowUsers ] = useState(false);

    useEffect(async () => {
        
        await axios.get('http://localhost:5000/api/users')
        .then(res => {
            setUsers(res.data);
            console.log("USERS RES: ", users); // I still don't understand why this logs before the state is updated
        })
        .catch(err => console.log("THE RES ERR: ", err))
    }, []);

    const renderUsers = () => {
        setShowUsers(!showUsers);
    }

  return (
  <section id="home">
        <h1>Tutor Full-Stack app</h1>
        <p>test</p>
        <button onClick={() => renderUsers()}>
            Toggle users
        </button>
            {showUsers ? <Users data={users} /> : <p></p>}
        
  </section>
  );
};



export default Home;
