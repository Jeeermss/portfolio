import React, { useState } from 'react';
import useStore from '../../hooks/useStore';
import { toast } from 'react-toastify';

import './password-protected.css';

const PasswordProtected = () => {
  const { authStore } = useStore();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) return;

    if (password === 'jeremie') {
      toast.success('Access Granted!');
      authStore.setIsAuthenticated(true);
      return;
    }
    toast.error('Wrong password.');
  };

  return (
    <div className="password-protected">
      <form onSubmit={handleSubmit} className="password-protected-content">
        <div className="password-protected-content-label">
          <h3>Password Protected</h3>
          <p>
            Please enter the password sent to you via email address or message.
          </p>
        </div>
        <div
          className={`password-protected-input ${
            inputFocused ? 'password-protected-input-focused' : ''
          }`}
        >
          <img src="assets/key.svg" alt="key" width={24} />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <img
            className="password-protected-input__show-password"
            src={showPassword ? 'assets/eye-slashed.svg' : 'assets/eye.svg'}
            alt="eye slashed"
            width={24}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button type="submit">View Case Study</button>
      </form>
    </div>
  );
};

export default PasswordProtected;
