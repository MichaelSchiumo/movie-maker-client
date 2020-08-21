import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    password_confirmation: '',
  });

  const { username, password, password_confirmation } = user;

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Regster</span>
      </h1>
      <form>
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
      </form>
    </div>
  );
};

export default Register;
