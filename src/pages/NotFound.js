/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const redirecionar = () => {
    navigate('/');
  };
  return (
    <section className="page-not-found">
      <h1>Page Not Fount</h1>

      <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        Retornar

      </button>
    </section>

  );
}

export default NotFound;
