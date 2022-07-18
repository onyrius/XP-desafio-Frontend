import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Saldo from './pages/Saldo';
import Comercio from './pages/Comercio';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route
        path="/saldo"
        element={<Saldo />}
      />
      <Route
        path="/comercio"
        element={<Comercio />}
      />
      <Route
        path="/*"
        element={<NotFound />}
      />
    </Routes>

  );
}
export default App;
