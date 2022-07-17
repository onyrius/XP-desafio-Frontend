/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BolsaAcoes from '../components/BolsaAcoes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MinhasAcoes from '../components/MinhasAcoes';

function Acoes() {
  const navigate = useNavigate();
  const redirecionar = () => {
    navigate('/');
  };
  return (

    <section className="Acoes">
      <Header />
      <section className="minhas-acoes">
        <MinhasAcoes />
        <BolsaAcoes />
      </section>
      <Footer />
      <button
        className="footer"
        type="button"
        onClick={redirecionar}
      >
        Sair
      </button>
    </section>

  );
}

export default Acoes;
