/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSaldo } from '../redux/reducers/loginSlice';

function SaldoTotal() {
  const { saldo } = useSelector(({ usuarioLogado }) => (usuarioLogado));
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({
    depositar: 0,
    retirar: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userState);
  };

  const depositar = (event) => {
    event.preventDefault();
    const saldoDepoisDeposito = Number(saldo) + Number(userState.depositar);
    dispatch(setSaldo(saldoDepoisDeposito));
  };
  const retirar = (event) => {
    event.preventDefault();
    const saldoDepoisDeposito = Number(saldo) - Number(userState.retirar);
    dispatch(setSaldo(saldoDepoisDeposito));
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
              className="button-depositar"
            >
              depositar
            </button>
            <input
              id="depositar"
              type="number"
              name="depositar"
              onChange={handleChange}
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
              className="button-retirar"
            >
              retirar
            </button>

            <input
              data-testid="input-retirar"
              id="retirar"
              type="number"
              name="retirar"
              onChange={handleChange}
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
