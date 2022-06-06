import { useState } from "react";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const login = async (data) => {
    try {
      const resp = await axios.post('/api/auth/login', data);
      alert(resp.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };

  const signup = async (data) => {
    try {
      const res = await axios.post('/api/auth/register', data);
      alert(res.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="" element={<Login login={login} />} />
          <Route exact path="/signup" element={<Signup signup={signup} />} />
          <Route exact path='/admin' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
