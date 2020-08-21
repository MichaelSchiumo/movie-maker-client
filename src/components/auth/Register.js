import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const { username, password, password_confirmation } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('Register submit', user);
  };

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Regster</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input
            type='password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={onChange}
          />
        </div>
        <input
          type='submit'
          value='Register'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Register;
