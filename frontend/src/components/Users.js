import React from 'react';
import User from './User';

// OK ive no ive gotta make it so the data comes in the props

const Users = (props) => {
  const users = props.data;
  return (
    <div>
    {users.map((x, i) => 
      <User user={users[i]} key={i} />
    )}
    </div>
  );
};

export default Users;
