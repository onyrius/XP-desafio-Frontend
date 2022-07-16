/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const user = useSelector(({ login: { email } }) => email);
  const navigate = useNavigate();
  console.log(user);

  const depositoRetirada = () => {
    navigate('/saldo');
  };
  return (
    <button
      className="footer"
      type="button"
      onClick={depositoRetirada}
    >
      Deposito/Retirada
    </button>

  );
}

export default Footer;
