/* eslint-disable no-console */
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SaldoTotal from '../components/SaldoTotal';

function Saldo() {
  return (
    <section>
      <Header />
      <section className="container-saldo-total">
        <SaldoTotal />
      </section>
      <Footer />
    </section>
  );
}

export default Saldo;
