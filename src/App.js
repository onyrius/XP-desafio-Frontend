import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acoes from './pages/Acoes';
import Login from './pages/Login';
import Saldo from './pages/Saldo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/acoes" element={<Acoes />} />
      <Route
        path="/saldo"
        element={<Saldo />}
      />

    </Routes>
  );
}
export default App;
