import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
// sass file
import '../styles/login.css';

const Login = () => {
  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  //   handle submit
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      'http://localhost:5000/api/auth/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    if (!email || !password) {
      alert('Enter Email and Password');
      // return;
    }
    const data = { email, password };
    navigate('/dashboard');
    console.log(data);
  };

  return (
    <div className='login__container'>
      <h1 className='login__main_heading'>Task</h1>
      <h2 className='login__heading'>Login to Your Account</h2>

      <input
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='login__input'
      />

      <input
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='login__input'
      />

      <button
        onClick={handleClick}
        className='login__submit'
        type='submit'
      >
        Login
      </button>
    </div>
  );
};

export default Login;
