/* eslint-disable no-console */
import React from 'react';
import ComprarVender from '../components/ComprarVender';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Comercio() {
  return (

    <section className="Acoes">
      <Header />
      <section className="meu-Comercio">
        <ComprarVender />
      </section>
      <Footer />
    </section>

  );
}

export default Comercio;
