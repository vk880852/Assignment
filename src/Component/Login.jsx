import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = localStorage.getItem('users');
  const userdata=JSON.parse(user);
  console.log(userdata);
  console.log(userdata.email);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }
    if (email === userdata.email && password === userdata.password) {
      navigate('/account');
    } else {
      alert('Invalid email or password. Please try again Or Register Again');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card w-100" style={{ maxWidth: '60vw', minHeight: '60vh' }}>
        <div className="card-body d-flex flex-column flex-grow-1">
          <h3 className="card-title text-center mb-4 fw-bold">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p className="text-end mt-3">
            <strong>
              <Link to="/register">Click here to Register</Link>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
