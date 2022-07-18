/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';

function SaldoTotal() {
  const { saldo } = useSelector(({ usuarioLogado }) => (usuarioLogado));
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
      <h3 className="header-title">
        Saldo Total:
        {' '}
        {saldo}
        {' '}
      </h3>
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
              placeholder="Digite o valor para depositar"
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
              placeholder="Digite o valor para retirar"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default SaldoTotal;
