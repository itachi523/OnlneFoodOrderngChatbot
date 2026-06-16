import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Auth.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      alert('User already exists');
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role: 'User',
    };

    users.push(newUser);

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    );

    // Auto login
    login({
      name,
      email,
    });

    alert('Account Created Successfully');

    navigate('/');
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-box">
        <div className="auth-header">
          <h2>Sign up</h2>
          <p>
            or{' '}
            <Link to="/login" className="auth-link">
              login to your account
            </Link>
          </p>
        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
          >
            Create Account
          </button>
        </form>

        <p className="auth-terms">
          By creating an account, I accept the Terms &
          Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Signup;