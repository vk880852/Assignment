import React, { useState } from 'react';

function Account() {
  const userData = JSON.parse(localStorage.getItem('users'));

  const [email, setEmail] = useState(userData?.email || 'user@example.com');
  const [password, setPassword] = useState(userData?.password || '******');
  const [name, setName] = useState(userData?.name || '');
  const [address, setAddress] = useState(userData?.address || '');


  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Account updated!');
    localStorage.setItem('users', JSON.stringify({ name, email, password, address }));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Account Information</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
