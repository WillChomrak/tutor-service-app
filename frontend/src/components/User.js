import React from 'react';

// I've gotta make sure the data is coming in nice from the users OR the first component..?
// this will change for get all vs get... though with users I won't need to get all...
// maybe for the backend?
// though I think I will render it in a table for that... IDK

const User = (props) => {
//   console.log("USER: ", props.user)
  return (
  <div> 
    <br />
    <div>USER PROP NAME: {props.user.name}</div>
    <div>USER PROP address: {props.user.address}</div>
    <div>USER PROP time: {props.user.time}</div>
  </div>
  );
};

export default User;
