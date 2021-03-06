import '../styles/login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ login }) => {
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    login(details);
  };
  return (
    <div id='loginform' style={{ margin: '100px auto' }}>
      <h2 id='headerTitle'>Login</h2>

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
      <div id='button' className='row'>
        <button
          onClick={handleSubmit}
          style={{
            display: 'flex',
            allignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Login
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          allignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Don't have account?</p>
        <Link to='/signup'>Signup here</Link>
      </div>
    </div>
  );
};
export default Login;
