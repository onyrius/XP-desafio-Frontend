/* eslint-disable no-console */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  let path = '';
  switch (location.pathname) {
    case '/inicio': path = 'Depositar / Retirar';
      break;
    default: path = 'Inicio';
      break;
  }

  const redirecionar = () => {
    let link = '';
    switch (location.pathname) {
      case '/inicio': link = '/saldo';
        break;
      default: link = '/inicio';
        break;
    }
    navigate(link);
  };
  return (
    <div className="container-footer">
      <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        {path}
      </button>
      <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        {path}
      </button>
    </div>
  );
}

export default Footer;
