/* eslint-disable no-console */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  let path = '';
  switch (location.pathname) {
    case '/acoes': path = 'Depositar / Retirar';
      break;
    default: path = 'Inicio';
      break;
  }

  const redirecionar = () => {
    let link = '';
    switch (location.pathname) {
      case '/acoes': link = '/saldo';
        break;
      default: link = '/acoes';
        break;
    }
    navigate(link);
  };
  return (
    <button
      className="footer"
      type="button"
      onClick={redirecionar}
    >
      {path}
    </button>

  );
}

export default Footer;
