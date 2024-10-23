import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import Account from './Component/Account.jsx';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navmenu.jsx';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />

      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-8 col-lg-6">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
