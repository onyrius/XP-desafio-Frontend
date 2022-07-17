/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

function SaldoTotal() {
  useSelector(({ login: { email } }) => email);
  const depositar = (event) => {
    event.preventDefault();
    console.log('depositei');
  };
  const retirar = (event) => {
    event.preventDefault();
    console.log('saquei');
  };
  return (
    <>
      <h3 className="header-title">Saldo Total: R$ 100000000,00 </h3>
      <section>
        <form className="form-depositar-retirar">
          <div className="container-button-input">
            <button
              type="submit"
              data-testid="btn-play"
              disabled={false}
              onClick={depositar}
              className="button-login"
            >
              depositar
            </button>
            <input
              id="depositar"
              name="depositar"
              onChange={depositar}
              placeholder="Informe o valor"
              className="input-form"
            />
          </div>
          <div className="container-button-input">
            <button
              type="submit"
              data-testid="btn-play"
              disabled={false}
              onClick={retirar}
              className="button-login"
            >
              retirar
            </button>

            <input
              data-testid="input-retirar"
              id="retirar"
              name="retirar"
              onChange={retirar}
              className="input-form"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default SaldoTotal;
