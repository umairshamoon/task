import '../styles/login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ signup }) => {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(details);
  };
  return (
    <div id='loginform'>
      <h2 id='headerTitle'>Signup</h2>
      <div className='row'>
        <label>Name</label>
        <input
          type='name-'
          name='name'
          id='name'
          value={details.name}
          onChange={(e) =>
            setDetails({ ...details, name: e.target.value })
          }
        />
      </div>

      {/* email */}
      <div className='row'>
        <label>Email</label>
        <input
          type='email-'
          name='email'
          id='email'
          value={details.email}
          onChange={(e) =>
            setDetails({ ...details, email: e.target.value })
          }
        />
      </div>

      {/* password */}
      <div className='row'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={details.password}
          onChange={(e) =>
            setDetails({
              ...details,
              password: e.target.value,
            })
          }
        />
      </div>

      {/* button */}
      <div
        id='button'
        className='row'
        style={{
          display: 'flex',
          allignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button onClick={handleSubmit}>Signup</button>
        <div
          style={{
            display: 'flex',
            allignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <p>Already have account </p>

          <Link to='/'>Signin</Link>
        </div>
      </div>
    </div>
  );
};
export default Signup;
