import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Acoes from './pages/Acoes';
import Login from './pages/Login';
import Saldo from './pages/Saldo';
import Comercio from './pages/Comercio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/acoes" element={<Acoes />} />
      <Route
        path="/saldo"
        element={<Saldo />}
      />
      <Route
        path="/comercio"
        element={<Comercio />}
      />
    </Routes>
  );
}
export default App;
