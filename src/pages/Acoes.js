/* eslint-disable no-console */
import React from 'react';
import BolsaAcoes from '../components/BolsaAcoes';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MinhasAcoes from '../components/MinhasAcoes';

function Acoes() {
  return (

    <section className="Acoes">
      <Header />
      <section className="minhas-acoes">
        <MinhasAcoes />
        <BolsaAcoes />
      </section>
      <Footer />
    </section>

  );
}

export default Acoes;
